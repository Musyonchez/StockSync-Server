import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const deactivateProductResolver = {
    Mutation: {
        deactivateProduct: async (
            _: any,
            { id, company, type }: { id: string; company: string; type: string }
          ) => {
            const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
      
            process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
      
            const prisma = new PrismaClient();
      
            try {
              const currentProduct = await prisma.products.findUnique({
                where: { id },
              });
      
              if (!currentProduct) {
                throw new Error(`Product with ID ${id} not found`);
              }
      
              const updatedProduct = await prisma.products.update({
                where: { id },
                data: {
                  active: !currentProduct.active,
                },
              });
      
              return updatedProduct;
            } catch (error) {
              throw new Error(`Error updating product: ${(error as Error).message}`);
            }
          },
  },
};
