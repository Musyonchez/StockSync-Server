import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const updateNewPasswordRecoveryUserResolver = {
  Mutation: {
    updateNewPasswordRecoveryUser: async (
      _: any,
      {
        email,
        temporaryAccessKey,
        password,
        company,
      }: {
        email: string;
        temporaryAccessKey: string;
        password: string;
        company: string;
      }
    ) => {
      console.log("updateNewPasswordRecoveryUser resolver starting", email);
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, "users");

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const existingUser = await prisma.users.findUnique({
          where: { email: email },
          select: {
            temporaryAccessKey: true,
          },
        });

        if (!existingUser) {
          throw new Error(`User with email ${email} not found`);
        }

        if (existingUser.temporaryAccessKey !== temporaryAccessKey) {
          throw new Error(
            `Temporary Access key is incorrect for user with email ${email}`
          );
        }

        const updatedUser = await prisma.users.update({
          where: { email: email },
          data: {
            password: password,
          },
        });

        return updatedUser;
      } catch (error) {
        throw new Error(`Error updating user: ${(error as Error).message}`);
      }
    },
  },
};
