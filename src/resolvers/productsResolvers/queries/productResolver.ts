import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const productResolver = {
  Query: {
    product: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
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

        // Find the product with the given id
        const product = await prisma.products.findUnique({
          where: {
            id,
          },
        });

        // If the product is not found, throw an error
        if (!product) {
          throw new Error(`Product with ID ${id} not found.`);
        }

        return product;
      } catch (error) {
        // Catch any errors that occur during the retrieval process
        throw new Error(`Error fetching product: ${(error as Error).message}`);
      }
    },
  },
};

export default productResolver;
