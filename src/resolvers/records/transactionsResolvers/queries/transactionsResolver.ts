import { PrismaClient } from "../../../../../prisma/generated/transactionsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const transactionsResolver = {
  Query: {
    getTransactions: async (
      _: any,
      {
        company,
        type,
        take,
        skip,
      }: { company: string; type: string; take: number; skip: number }
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
        const totalProducts = await prisma.transactions.count({});

        const transactions = await prisma.transactions.findMany({
          take,
          skip,
          // include: {
          //   details: true,
          // },
        });

        if (!transactions || transactions.length === 0) {
          throw new Error(
            `No transactions found for company ${company} and store ${type}.`
          );
        }

        // Format the createdAt field in each transaction before returning

        return transactions.map((transaction) => ({
          ...transaction,
          createdAt: transaction.createdAt.toLocaleString(), // Format createdAt
          totalProducts,
        }));
      } catch (error) {
        throw new Error(
          `Unable to fetch transactions: ${(error as Error).message}`
        );
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
