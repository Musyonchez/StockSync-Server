import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const editUserResolver = {
  Mutation: {
    editUser: async (
      _: any,
      {
        id,
        company,
        type,
        filterArray,
      }: {
        id: string;
        company: string;
        type: string;
        filterArray: { field: string; value: string }[];
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
        // Find the existing user
        const existingUser = await prisma.users.findUnique({
          where: {
            id: id,
          },
        });

        if (!existingUser) {
          throw new Error(`User with id ${id} not found`);
        }

        const data: Record<string, string | boolean> = {};
        // Process each field in the filter array
        filterArray.forEach(({ field, value }) => {
          if (value === 'true' || value === 'false') {
            // Convert string value to boolean
            data[field] = value === 'true';
          } else {
            // Handle other field types or leave as string
            data[field] = value;
          }
        });

        // Update the user with the new data
        const updatedUser = await prisma.users.update({
          where: { id: id },
          data,
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
