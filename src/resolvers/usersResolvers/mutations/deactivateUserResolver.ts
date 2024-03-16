import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";
import { noop } from "../../../components/noop";

export const deactivateUserResolver = {
  Mutation: {
    deactivateUser: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
       // Use the dummy function to "preoccupy" the 'type' variable
        noop(type);
      // Get dynamic database URL based on company and type
      const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        "users"
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        // Find the user by ID
        const currentUser = await prisma.users.findUnique({
          where: { id },
        });

        if (!currentUser) {
          throw new Error(`User with ID ${id} not found`);
        }

        // Toggle the active status of the user
        const updatedUser = await prisma.users.update({
          where: { id },
          data: {
            active: !currentUser.active,
          },
        });

        if (!updatedUser) {
          throw new Error(`Failed to update user`);
        }

        return updatedUser;
      } catch (error) {
        throw new Error(`Error deactivating user: ${(error as Error).message}`);
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
