import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";
import { noop } from "../../../components/noop";

export const deleteUserResolver = {
  Mutation: {
    deleteUser: async (
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

        // Check if the user has any transaction records
        if (!currentUser.firstRecordAction) {
          // Delete the user
          const deletedUser = await prisma.users.delete({
            where: { id },
          });

          if (!deletedUser) {
            throw new Error(`Failed to delete user`);
          }

          return deletedUser;
        } else {
          throw new Error("User already has a transaction record and cannot be deleted.");
        }
      } catch (error) {
        throw new Error(`Error deleting user: ${(error as Error).message}`);
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};

