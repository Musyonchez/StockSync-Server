import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const productsResolver = {
  Query: {
    products: async (
      _: any,
      {
        company,
        type,
        take,
        skip,
      }: { company: string; type: string; take: number; skip: number }
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
        
        const totalProducts = await prisma.products.count({});

        // Retrieve products from the database
        const products = await prisma.products.findMany({
          take,
          skip,
        });

        // If no products are found, throw an error
        if (!products || products.length === 0) {
          throw new Error(
            `No products found for company ${company} and store ${type}.`
          );
        }

        return products.map(product => ({
          ...product,
          totalProducts,
        }));
        
      } catch (error) {
        // Catch any errors that occur during the retrieval process
        throw new Error(`Error fetching products: ${(error as Error).message}`);
      }
    },
  },
};

export default productsResolver;
