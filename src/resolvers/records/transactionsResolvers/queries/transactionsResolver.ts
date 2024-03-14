import { PrismaClient } from "../../../../../prisma/generated/transactionsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const transactionsResolver = {
  Query: {
    getTransactions: async (
      _: any,
      { company, type }: { company: string; type: string }
    ) => {
       // Get dynamic database URL based on company and type
     const dynamicProductsDatabaseUrl = await getDynamicDatabaseUrl(
      company,
      type
    );

    // Set environment variable for database URL
    process.env.MONGODB_URL_PRODUCTS = dynamicProductsDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const transactions = await prisma.transactions.findMany();

        if (!transactions || transactions.length === 0) {
          throw new Error(`No transactions found for company ${company} and type ${type}.`);
        }

        // Format the createdAt field in each transaction before returning
        const formattedTransactions = transactions.map((transaction) => ({
          ...transaction,
          createdAt: transaction.createdAt.toLocaleString(), // Format createdAt
        }));

        return formattedTransactions;
      } catch (error) {
        throw new Error(`Unable to fetch transactions: ${(error as Error).message}`);
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
