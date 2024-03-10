import { PrismaClient } from "../../../../../prisma/generated/transactionsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const transactionResolver = {
  Query: {
    getTransaction: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const transaction = await prisma.transactions.findUnique({
          where: {
            id: id,
          },
        });

        if (!transaction) {
          throw new Error("Restocking not found");
        }
        // Format the createdAt field before returning
        const formattedTransaction = {
          ...transaction,
          createdAt: transaction.createdAt.toLocaleString(), // Format createdAt
        };

        return formattedTransaction;
      } catch (error) {
        console.error("Error fetching transaction:", error);
        throw new Error("Unable to fetch transaction.");
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
