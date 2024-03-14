import { PrismaClient } from "../../../../../prisma/generated/transactionsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const transactionResolver = {
  Query: {
    getTransaction: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
     // Get dynamic database URL based on company and type
     const dynamicProductsDatabaseUrl = await getDynamicDatabaseUrl(
      company,
      type
    );

    // Set environment variable for database URL
    process.env.MONGODB_URL = dynamicProductsDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const transaction = await prisma.transactions.findUnique({
          where: {
            id: id,
          },
        });

        if (!transaction) {
          throw new Error(`Transaction with ID ${id} not found.`);
        }
        // Format the createdAt field before returning
        const formattedTransaction = {
          ...transaction,
          createdAt: transaction.createdAt.toLocaleString(), // Format createdAt
        };

        return formattedTransaction;
      } catch (error) {
        throw new Error(`Unable to fetch transaction: ${(error as Error).message}`);
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
