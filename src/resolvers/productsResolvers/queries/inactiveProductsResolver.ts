import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const inactiveProductsResolver = {
  Query: {
    inactiveProducts: async (
        _: any,
        { company, type }: { company: string; type: string }
      ) => {
        const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
  
        process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
  
        const prisma = new PrismaClient();
  
        return await prisma.products.findMany({
          where: {
            active: false,
          },
        });
      },
  },
};
