import { PrismaClient } from "../../../../../prisma/generated/writeoffsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const writeoffsResolver = {
  Query: {
    getWriteoffs: async (
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
        // Retrieve the list of writeoffs from the database
        const writeoffs = await prisma.writeoffs.findMany();

        // Check if writeoffs is empty or null
        if (!writeoffs || writeoffs.length === 0) {
          // Throw an error if no writeoffs are found
          throw new Error(`No writeoffs found for company ${company} and store ${type}.`);
        }

        // Format the createdAt field before returning the list of writeoffs
        const formattedWriteoffs = writeoffs.map((writeoff) => ({
          ...writeoff,
          createdAt: writeoff.createdAt.toLocaleString(), // Format createdAt
        }));

        return formattedWriteoffs;
      } catch (error) {
        // Throw an error if fetching writeoffs fails
        throw new Error(`Unable to fetch writeoffs: ${(error as Error).message}`);
      } finally {
        // Disconnect from the Prisma client
        await prisma.$disconnect();
      }
    },
  },
};
