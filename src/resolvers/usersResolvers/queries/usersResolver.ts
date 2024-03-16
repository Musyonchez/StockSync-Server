import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const usersResolver = {
  Query: {
    users: async (
      _: any,
      { company, type }: { company: string; type: string }
    ) => {
      try {
        // Get dynamic database URL based on company and type
        const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
          company,
          "users"
        );

        // Set environment variable for database URL
        process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

        // Initialize Prisma client
        const prisma = new PrismaClient();

        // Retrieve all users from the database
        const users = await prisma.users.findMany();

        // Check if users array is empty
        if (users.length === 0) {
          throw new Error("No users found");
        }

        // Return the list of users
        return users;
      } catch (error) {
        // Throw an error if any occurred during the execution
        throw new Error(`Error fetching users: ${(error as Error).message}`);
      }
    },
  },
};
