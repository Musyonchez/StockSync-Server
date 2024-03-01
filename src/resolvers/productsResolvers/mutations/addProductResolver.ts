import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const addProductResolver = {
    Mutation: {
    addProduct: async (
        _: any,
        args: {
          name: string;
          description: string;
          category: string;
          company: string;
          type: string;
        }
      ) => {
        const { company, type, ...productData } = args;
  
        const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
  
        process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
  
        const prisma = new PrismaClient();
  
        return await prisma.products.create({ data: productData });
      },
  },
};
