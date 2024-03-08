import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const deactivateUserResolver = {
    Mutation: {
        deactivateUser: async (
            _: any,
            { id, company, type }: { id: string; company: string; type: string }
          ) => {
            console.log("deactivate user starting", id)
            const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
      
            process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
      
            const prisma = new PrismaClient();
      
            try {
              const currentUser = await prisma.users.findUnique({
                where: { id },
              });
      
              if (!currentUser) {
                throw new Error(`User with ID ${id} not found`);
              }
      
              const updatedUser = await prisma.users.update({
                where: { id },
                data: {
                  active: !currentUser.active,
                },
              });
      
              return updatedUser;
            } catch (error) {
              throw new Error(`Error updating user: ${(error as Error).message}`);
            }
          },
  },
};
