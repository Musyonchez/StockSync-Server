import { PrismaClient } from "../../../../../prisma/generated/restockingsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const restockingsResolver = {
  Query: {
    getRestockings: async (
      _: any,
      { company, type }: { company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const restockings = await prisma.restockings.findMany();
        
        // Format the createdAt field before returning the Restocking object
        const formattedRestockings = restockings.map((restocking) => ({
          ...restocking,
          createdAt: restocking.createdAt.toLocaleString(), // Format createdAt
        }));

        return formattedRestockings;
      } catch (error) {
        console.error("Error fetching restockings:", error);
        throw new Error("Unable to fetch restockings.");
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
