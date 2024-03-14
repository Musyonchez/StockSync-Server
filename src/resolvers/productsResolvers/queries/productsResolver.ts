import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const productsResolver = {
  Query: {
    products: async (
      _: any,
      { company, type }: { company: string; type: string }
    ) => {
      try {
        // Get dynamic database URL based on company and type
        const dynamicProductsDatabaseUrl = await getDynamicDatabaseUrl(
          company,
          type
        );

        // Set environment variable for database URL
        process.env.MONGODB_URL_PRODUCTS = dynamicProductsDatabaseUrl;

        const prisma = new PrismaClient();

        // Retrieve products from the database
        const products = await prisma.products.findMany();

        // If no products are found, throw an error
        if (!products || products.length === 0) {
          throw new Error(
            `No products found for company ${company} and type ${type}.`
          );
        }

        // Return the products
        return products;
      } catch (error) {
        // Catch any errors that occur during the retrieval process
        throw new Error(
          `Error fetching products: ${(error as Error).message}`
        );
      }
    },
  },
};

export default productsResolver;
