import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const deleteProductResolver = {
  Mutation: {
    deleteProduct: async (
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
        // Check if the product exists in the database
        const existingProduct = await prisma.products.findUnique({
          where: { id },
        });

        // If the product does not exist, throw an error
        if (!existingProduct) {
          throw new Error(`Product with ID ${id} not found.`);
        }

        // Check if the product has any transaction records
        if (!existingProduct.firstRecordAction) {
          // If the product has no transaction records, delete it
          const deletedProduct = await prisma.products.delete({
            where: { id },
          });

          return deletedProduct; // Return the deleted product
        } else {
          // If the product has transaction records, it cannot be deleted
          throw new Error(
            "Product already has a transaction record and cannot be deleted."
          );
        }
      } catch (error) {
        // Catch any errors that occur during the deletion process
        throw new Error(`Error deleting product: ${(error as Error).message}`);
      } finally {
        // Disconnect from the database after operation completion
        await prisma.$disconnect();
      }
    },
  },
};

export default deleteProductResolver;
