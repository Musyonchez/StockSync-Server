import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const deleteProductResolver = {
    Mutation: {
        deleteProduct: async (
            _: any,
            { id, company, type }: { id: string; company: string; type: string }
          ) => {
            const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
      
            process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
      
            const prisma = new PrismaClient();
      
            try {
              const deletedProduct = await prisma.products.delete({
                where: { id },
              });
      
              return deletedProduct;
            } catch (error) {
              throw new Error(`Error deleting product: ${(error as Error).message}`);
            }
          },
  },
};
