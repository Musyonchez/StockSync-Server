import { PrismaClient } from "../../../../../prisma/generated/restockingsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const restockingsResolver = {
  Query: {
    getRestockings: async (
      _: any,
      { company, type }: { company: string; type: string }
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
        const restockings = await prisma.restockings.findMany();

        if(!restockings || restockings.length === 0){
          throw new Error(`No restockings found for company ${company} and type ${type}.`);
        }
        
        // Format the createdAt field before returning the Restocking object
        const formattedRestockings = restockings.map((restocking) => ({
          ...restocking,
          createdAt: restocking.createdAt.toLocaleString(), // Format createdAt
        }));

        return formattedRestockings;
      } catch (error) {
        throw new Error(`Unable to fetch restockings: ${(error as Error).message}`);
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
