import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const activeProductsResolver = {
  Query: {
    activeProducts: async (
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
        // Retrieve active products from the database
        const products = await prisma.products.findMany({
          where: {
            active: true,
          },
        });

        // If no active products are found, throw an error
        if (!products || products.length === 0) {
          throw new Error(`No active products found for company ${company} and store ${type}.`);
        }

        // Return the active products
        return products;
      } catch (error) {
        // Catch any errors that occur during the retrieval process
        throw new Error(`Error fetching active products: ${(error as Error).message}`);
      }
    },
  },
};

export default activeProductsResolver;
