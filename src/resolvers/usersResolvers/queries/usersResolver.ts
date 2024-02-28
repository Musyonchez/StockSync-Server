import { PrismaClient } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const usersResolver = {
    Query: {
        users: async (
            _: any,
            { company, type }: { company: string; type: string }
          ) => {
            const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
      
            process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
            const prisma = new PrismaClient();
      
            return await prisma.users.findMany();
          },
  },
};
