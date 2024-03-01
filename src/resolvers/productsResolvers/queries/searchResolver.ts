import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const searchResolver = {
  Query: {
    search: async (
      _: any,
      { company, type, filterArray }: { company: string; type: string; filterArray: { field: string; value: string }[] }
      ) => {
      if (!filterArray || filterArray.length === 0) {
        throw new Error('Filter array must not be empty.');
      }

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      const orConditions = filterArray.map((filter) => {
        return {
          [filter.field]: {
            contains: filter.value,
          },
        };
      });

      const results = await prisma.products.findMany({
        where: {
          AND: orConditions,
        },
      });

      return results;
    },
  },
};

export default searchResolver;
