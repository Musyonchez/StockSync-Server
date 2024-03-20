import { PrismaClient } from "../../../../../prisma/generated/restockingsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const restockingsResolver = {
  Query: {
    getRestockings: async (
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
        const totalProducts = await prisma.restockings.count({});

        const restockings = await prisma.restockings.findMany({
          take,
          skip,
          // include: {
          //   details: true,
          // },
        });

        if (!restockings || restockings.length === 0) {
          throw new Error(
            `No restockings found for company ${company} and store ${type}.`
          );
        }

        // Format the createdAt field before returning the Restocking object

        return restockings.map((restocking) => ({
          ...restocking,
          createdAt: restocking.createdAt.toLocaleString(), // Format createdAt
          totalProducts,
        }));
      } catch (error) {
        throw new Error(
          `Unable to fetch restockings: ${(error as Error).message}`
        );
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
