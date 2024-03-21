import { PrismaClient } from "../../../../../prisma/generated/writeoffsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const writeoffsResolver = {
  Query: {
    getWriteoffs: async (
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
        const totalProducts = await prisma.writeoffs.count({});

        // Retrieve the list of writeoffs from the database
        const writeoffs = await prisma.writeoffs.findMany({
          take,
          skip,
          // include: {
          //   details: true,
          // },
        });

        // Check if writeoffs is empty or null
        if (!writeoffs || writeoffs.length === 0) {
          // Throw an error if no writeoffs are found
          throw new Error(
            `No writeoffs found for company ${company} and store ${type}.`
          );
        }

        // Format the createdAt field before returning the list of writeoffs
        // Format the createdAt field before returning the list of writeoffs
        return writeoffs
          .map((writeoff) => ({
            ...writeoff,
            createdAt: new Date(writeoff.createdAt).toLocaleString("en-US", {
              timeZone: "Africa/Nairobi",
            }),
            totalProducts,
          }))
          .map((writeoff) => ({
            ...writeoff,
            totalProducts,
          }));
      } catch (error) {
        // Throw an error if fetching writeoffs fails
        throw new Error(
          `Unable to fetch writeoffs: ${(error as Error).message}`
        );
      } finally {
        // Disconnect from the Prisma client
        await prisma.$disconnect();
      }
    },
  },
};
