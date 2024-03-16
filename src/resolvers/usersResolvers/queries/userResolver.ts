import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";
import { noop } from "../../../components/noop";

export const userResolver = {
  Query: {
    user: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
      try {
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

        // Find the user by ID
        const user = await prisma.users.findUnique({
          where: {
            id,
          },
        });

        // If user not found, throw error
        if (!user) {
          throw new Error(`User not found with id ${id}`);
        }

        // Return the user
        return { ...user };
      } catch (error) {
        // Handle and rethrow the error
        throw new Error(`Error fetching user: ${(error as Error).message}`);
      }
    },
  },
};
