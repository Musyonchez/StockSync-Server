import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const productsResolver = {
  Query: {
    products: async (
        _: any,
        { company, type }: { company: string; type: string }
      ) => {
        const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
  
        process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
  
        const prisma = new PrismaClient();
        return await prisma.products.findMany();
      },
  },
};
