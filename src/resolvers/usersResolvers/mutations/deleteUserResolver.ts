import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const deleteUserResolver = {
    Mutation: {
        deleteUser: async (
            _: any,
            { id, company, type }: { id: string; company: string; type: string }
          ) => {
            const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
      
            process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
      
            const prisma = new PrismaClient();
      
            try {
              const currentUser = await prisma.users.findUnique({
                where: { id },
              });
      
              if (!currentUser) {
                throw new Error(`User with ID ${id} not found`);
              }
      
              const deletedUser = await prisma.users.delete({
                where: { id },
              });
      
              return deletedUser;
            } catch (error) {
              throw new Error(`Error deleting user: ${(error as Error).message}`);
            }
          },
  },
};
