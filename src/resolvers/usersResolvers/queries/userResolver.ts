import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const userResolver = {
    Query: {
        user: async (
            _: any,
            { id, company, type }: { id: string; company: string; type: string }
          ) => {
            console.log("fetch user starting", id)
            const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
          
            process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
            const prisma = new PrismaClient();
          
            const user = await prisma.users.findUnique({
              where: {
                id,
              },
            });
          
            if (!user) {
              throw new Error("User not found");
            }
          
            return { ...user };
          },
  },
};
