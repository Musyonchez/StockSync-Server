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
      // Get dynamic database URL based on company and type
      const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        "users"
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        // Check if user with provided email exists
        const existingUser = await prisma.users.findUnique({
          where: { email: email },
          select: {
            temporaryAccessKey: true,
          },
        });

        if (!existingUser) {
          throw new Error(`User with email ${email} not found`);
        }

        // Verify temporary access key
        if (existingUser.temporaryAccessKey !== temporaryAccessKey) {
          throw new Error(
            `Temporary Access key is incorrect for user with email ${email}`
          );
        }

        // Update user's password and clear temporary access key
        const updatedUser = await prisma.users.update({
          where: { email: email },
          data: {
            password: password,
            temporaryAccessKey: "EMPTY",
          },
        });

        if (!updatedUser) {
          throw new Error(`Failed to update user with email ${email}`);
        }

        return updatedUser;
      } catch (error) {
        throw new Error(`Error updating user: ${(error as Error).message}`);
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
