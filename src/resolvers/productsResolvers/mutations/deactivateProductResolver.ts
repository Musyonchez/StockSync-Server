import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const deactivateProductResolver = {
  Mutation: {
    deactivateProduct: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
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
        // Find the product in the database
        const currentProduct = await prisma.products.findUnique({
          where: { id },
        });

        // If the product does not exist, throw an error
        if (!currentProduct) {
          throw new Error(`Product with ID ${id} not found.`);
        }

        // Update the product's 'active' status
        const updatedProduct = await prisma.products.update({
          where: { id },
          data: {
            active: !currentProduct.active, // Toggle the 'active' status
          },
        });

        // If the update operation fails, throw an error
        if (!updatedProduct) {
          throw new Error(`Failed to update product with ID ${id}.`);
        }

        return updatedProduct; // Return the updated product
      } catch (error) {
        throw new Error(`Error updating product: ${(error as Error).message}`);
      } finally {
        // Disconnect from the database after operation completion
        await prisma.$disconnect();
      }
    },
  },
};
