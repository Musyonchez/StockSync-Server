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

      console.log("edit resolver starting", filterArray)
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const existingUser = await prisma.users.findUnique({
          where: {
            id: id,
          },
        });

        if (!existingUser) {
          throw new Error(`User with id ${id} not found`);
        }

        const data: Record<string, string | boolean> = {};
        filterArray.forEach(({ field, value }) => {
          if (value === 'true' || value === 'false') {
            // Convert string value to boolean
            data[field] = value === 'true';
          } else {
            // Handle other field types or leave as string
            data[field] = value;
          }
        });
        

        const updatedUser = await prisma.users.update({
          where: { id: id },
          data,
        });

        return updatedUser;
      } catch (error) {
        throw new Error(`Error updating user: ${(error as Error).message}`);
      }
    },
  },
};
