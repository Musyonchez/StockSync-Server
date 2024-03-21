import { PrismaClient } from "../../../../../prisma/generated/restockingsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const restockingResolver = {
  Query: {
    getRestocking: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
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
        const restocking = await prisma.restockings.findUnique({
          where: {
            id: id,
          },
        });

        // Check if restocking is not null
        if (!restocking) {
          throw new Error(`Restocking with ID ${id} not found`);
        }

        // Format the createdAt field before returning the Restocking object
        return {
          ...restocking,
          createdAt: new Date(restocking.createdAt).toLocaleString("en-US", {
            timeZone: "Africa/Nairobi",
          }),
        };
      } catch (error) {
        throw new Error(`Unable to fetch restocking`);
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
