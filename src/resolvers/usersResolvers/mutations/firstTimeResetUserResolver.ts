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
      console.log("firstTimeResetUser resolver starting", id);
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

        const updatedUser = await prisma.users.update({
          where: { id: id },
          data: {
            firstsignin: false, // Set firstsignin to false
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
