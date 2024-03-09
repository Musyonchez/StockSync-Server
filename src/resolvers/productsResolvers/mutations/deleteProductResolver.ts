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
        const existingProduct = await prisma.products.findUnique({
          where: { id },
        });

        if (!existingProduct) {
          throw new Error(`Product with ID ${id} not found`);
        }

        if (!existingProduct.firstRecordAction) {
          const deletedProduct = await prisma.products.delete({
            where: { id },
          });

          return deletedProduct;
        } else {
          throw new Error("Product already has a transaction record and cannot be deleted.");
        }
      } catch (error) {
        throw new Error(`Error deleting product: ${(error as Error).message}`);
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};

export default deleteProductResolver;
