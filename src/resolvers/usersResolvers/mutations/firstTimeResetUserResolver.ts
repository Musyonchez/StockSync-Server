import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const firstTimeResetUserResolver = {
  Mutation: {
    firstTimeResetUser: async (
      _: any,
      {
        id,
        password,
        company,
        type,
      }: {
        id: string;
        password: string;
        company: string;
        type: string;
      }
    ) => {
      // Get dynamic database URL based on company and type
      const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        type
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        // Find the existing user
        const existingUser = await prisma.users.findUnique({
          where: {
            id: id,
          },
          select: {
            password: true,
          }
        });

        if (!existingUser) {
          throw new Error(`User with id ${id} not found`);
        }

        if (password === existingUser.password) {
          throw new Error(`New password cannot be the same as the old password`);
        }

        // Update the user's password and set firstsignin to false
        const updatedUser = await prisma.users.update({
          where: { id: id },
          data: {
            firstsignin: false,
            password: password,
          },
        });

        if (!updatedUser) {
          throw new Error(`Failed to update user with id ${id}`);
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
