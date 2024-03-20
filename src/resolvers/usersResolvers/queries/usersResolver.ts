import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";
import { noop } from "../../../components/noop";

export const usersResolver = {
  Query: {
    users: async (
      _: any,
      {
        company,
        type,
        take,
        skip,
      }: { company: string; type: string; take: number; skip: number }
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

        // Initialize Prisma client
        const prisma = new PrismaClient();

        const totalUsers = await prisma.users.count({});


        // Retrieve all users from the database
        const users = await prisma.users.findMany({
          take,
          skip,
        });

        // Check if users array is empty
        if (users.length === 0) {
          throw new Error("No users found");
        }

        // Return the list of users
        return users.map(user => ({
          ...user,
          totalUsers,
        }));
      
      } catch (error) {
        // Throw an error if any occurred during the execution
        throw new Error(`Error fetching users: ${(error as Error).message}`);
      }
    },
  },
};
