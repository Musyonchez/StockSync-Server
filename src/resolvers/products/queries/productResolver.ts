import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const productResolver = {
  Query: {
    product: async (
        _: any,
        { id, company, type }: { id: string; company: string; type: string }
      ) => {
        const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
  
        process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
  
        const prisma = new PrismaClient();
  
        return await prisma.products.findUnique({
          where: {
            id,
          },
        });
      },
  },
};
