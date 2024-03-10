import { PrismaClient } from "../../../../../prisma/generated/restockingsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const restockingResolver = {
  Query: {
    getRestocking: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const restocking = await prisma.restockings.findUnique({
          where: {
            id: id,
          },
        });

        // Check if restocking is not null
        if (!restocking) {
          throw new Error("Restocking not found");
        }

        // Format the createdAt field before returning the Restocking object
        const formattedRestocking = {
          ...restocking,
          createdAt: restocking.createdAt.toLocaleString(), // Format createdAt
        };

        return formattedRestocking;
      } catch (error) {
        console.error("Error fetching restocking:", error);
        throw new Error("Unable to fetch restocking.");
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
