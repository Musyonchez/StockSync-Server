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
      console.log("edit resolver starting", filterArray)

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const existingProduct = await prisma.products.findUnique({
          where: {
            id: id,
          },
        });

        if (!existingProduct) {
          throw new Error(`Product with id ${id} not found`);
        }

        const data: Record<string, string | boolean | number> = {};
        filterArray.forEach(({ field, value }) => {
          // Try to parse the value as a number
          const numericValue = parseFloat(value);

          if (!isNaN(numericValue)) {
            // If successful, assign the numeric value
            data[field] = numericValue;
          } else if (value === 'true' || value === 'false') {
            // Convert string value to boolean
            data[field] = value === 'true';
          } else {
            // Otherwise, leave as string
            data[field] = value;
          }
        });
        

        const updatedProduct = await prisma.products.update({
          where: { id: id },
          data,
        });



        return updatedProduct;
      } catch (error) {
        throw new Error(`Error updating product: ${(error as Error).message}`);
      }
    },
  },
};
