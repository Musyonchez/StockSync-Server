import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const updateNewPasswordRecoveryUserResolver = {
  Mutation: {
    updateNewPasswordRecoveryUser: async (
      _: any,
      {
        id,
        temporaryAccessKey,
        password,
        company,
        type,
      }: {
        id: string;
        temporaryAccessKey: string;
        password: string;
        company: string;
        type: string;
      }
    ) => {
      console.log("updateNewPasswordRecoveryUser resolver starting", id);
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const existingUser = await prisma.users.findUnique({
          where: { id: id },
          select: {
            temporaryAccessKey: true,
          },
        });

        if (!existingUser) {
          throw new Error(`User with id ${id} not found`);
        }

        if (existingUser.temporaryAccessKey !== temporaryAccessKey) {
          throw new Error(
            `Temporary Access key is incorrect for user with id ${id}`
          );
        }

        const updatedUser = await prisma.users.update({
          where: { id: id },
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
