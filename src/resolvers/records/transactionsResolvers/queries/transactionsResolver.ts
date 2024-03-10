import { PrismaClient } from "../../../../../prisma/generated/transactionsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const transactionsResolver = {
  Query: {
    getTransactions: async (
      _: any,
      { company, type }: { company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const transactions = await prisma.transactions.findMany();

        // Format the createdAt field in each transaction before returning
        const formattedTransactions = transactions.map((transaction) => ({
          ...transaction,
          createdAt: transaction.createdAt.toLocaleString(), // Format createdAt
        }));

        return formattedTransactions;
      } catch (error) {
        console.error("Error fetching transactions:", error);
        throw new Error("Unable to fetch transactions.");
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
