import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const searchProductsResolver = {
  Query: {
    searchProducts: async (
      _: any,
      { company, type, filterArray }: { company: string; type: string; filterArray: { field: string; value: string }[] }
    ) => {
      try {
        // Ensure that the filter array is not empty
        if (!filterArray || filterArray.length === 0) {
          throw new Error('Filter array must not be empty.');
        }

        // Get dynamic database URL based on company and type
        const dynamicProductsDatabaseUrl = await getDynamicDatabaseUrl(company, type);

        // Set environment variable for database URL
        process.env.MONGODB_URL = dynamicProductsDatabaseUrl;

        const prisma = new PrismaClient();

        const andConditions = filterArray.map((filter) => {
          // Convert both the field and the value to lowercase for case-insensitive search
          return {
            [filter.field]: {
              contains: filter.value.toLowerCase(),
              mode: 'insensitive', // This option is not directly supported for 'contains' in MongoDB
            },
            active: true, // Ensure that only active products are considered
          };
        });

        const results = await prisma.products.findMany({
          where: {
            AND: andConditions,
          },
        });

        // If no results are found, return an empty array
        if (!results || results.length === 0) {
          throw new Error('No matching products found.');
        }

        return results;
      } catch (error) {
        // Catch any errors that occur during the search process
        throw new Error(`Error searching products: ${(error as Error).message}`);
      }
    },
  },
};

export default searchProductsResolver;
