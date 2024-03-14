import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const editProductResolver = {
  Mutation: {
    editProduct: async (
      _: any,
      {
        id,
        company,
        type,
        filterArray,
      }: {
        id: string;
        company: string;
        type: string;
        filterArray: { field: string; value: string }[];
      }
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
        // Find the existing product in the database
        const existingProduct = await prisma.products.findUnique({
          where: {
            id: id,
          },
        });

        // If the product doesn't exist, throw an error
        if (!existingProduct) {
          throw new Error(`Product with ID ${id} not found.`);
        }

        // Initialize an object to store updated data
        const data: Record<string, string | boolean | number> = {};

        // Iterate over each field-value pair in the filter array
        filterArray.forEach(({ field, value }) => {
          // Try to parse the value as a number
          const numericValue = parseFloat(value);

          // If successful, assign the numeric value
          if (!isNaN(numericValue)) {
            data[field] = numericValue;
          } else if (value === "true" || value === "false") {
            // Convert string value to boolean if it represents a boolean
            data[field] = value === "true";
          } else {
            // Otherwise, leave the value as string
            data[field] = value;
          }
        });

        // Update the product with the new data
        const updatedProduct = await prisma.products.update({
          where: { id: id },
          data,
        });

        // If the product update fails, throw an error
        if (!updatedProduct) {
          throw new Error(`Failed to update product with ID ${id}.`);
        }

        // Return the updated product
        return updatedProduct;
      } catch (error) {
        // Catch any errors that occur during the update process
        throw new Error(`Error updating product: ${(error as Error).message}`);
      }
    },
  },
};

export default editProductResolver;
