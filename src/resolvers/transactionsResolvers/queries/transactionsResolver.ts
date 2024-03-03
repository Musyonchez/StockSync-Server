import { PrismaClient } from "../../../../prisma/generated/transactionsClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const transactionsResolver = {
  Query: {
    getTransactions: async (
        _: any,
        { company, type }: { company: string; type: string }
      ) => {
        const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
  
        process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
  
        const prisma = new PrismaClient();
        return await prisma.transactions.findMany();
      },
  },
};
