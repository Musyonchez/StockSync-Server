import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const sellProductResolver = {
  Mutation: {
    sellProduct: async (
      _: any,
      {
        company,
        type,
        filterArray,
      }: {
        company: string;
        type: string;
        filterArray: { field: string; value: number }[];
      }
    ): Promise<boolean> => {
      if (!filterArray || filterArray.length === 0) {
        throw new Error("Filter array must not be empty.");
      }

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      let allSucceeded = true;

      try {

        console.log("filterArray", filterArray)
        // Start a transaction
        await prisma.$transaction(async (tx) => {
          // Iterate over each item in the filterArray
          for (const item of filterArray) {
            // Assuming the 'field' is the product ID and 'value' is the number to subtract
            const productId = item.field;
            const numberToSubtract = item.value;

            // Find the product by ID
            const existingProduct = await tx.products.findUnique({
              where: { id: productId },
              select: { current: true },
            });

            // Check if subtraction would result in a negative value
            if (existingProduct === null) {
              throw new Error(`Product with ID ${productId} not found.`);
            } else if (existingProduct.current !== null && existingProduct.current - numberToSubtract < 0) {
              throw new Error(`Subtraction would result in a negative value for product ${productId}.`);
            }

            // Update the product's 'current' field
            await tx.products.update({
              where: { id: productId },
              data: {
                current: {
                  decrement: numberToSubtract,
                },
              },
            });
          }
        });
      } catch (error) {
        // If an error occurs, set allSucceeded to false
        allSucceeded = false;
      } finally {
        // Close the PrismaClient connection
        await prisma.$disconnect();
      }

      return allSucceeded; // Return true if all updates succeeded, false otherwise
    },
  },
};

export default sellProductResolver;
