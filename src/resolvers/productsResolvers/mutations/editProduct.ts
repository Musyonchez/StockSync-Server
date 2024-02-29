import { PrismaClient } from "../../../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const editProductResolver = {
  Mutation: {
    editProduct: async (
      _: any,
      args: {
        id: string;
        name?: string;
        description?: string;
        category?: string;
        current: number;
        reoderLevel: number;
        unitCost: number;
        sellingPrice: number;
        taxInformation: number;
        imageURL: string;
        supplier: string;
        company: string;
        type: string;
      }
    ) => {
      const { company, type } = args;

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const existingProduct = await prisma.products.findUnique({
          where: {
            id: args.id,
          },
        });

        if (!existingProduct) {
          throw new Error(`Product with id ${args.id} not found`);
        }

        const updatedProduct = await prisma.products.update({
          where: { id: args.id },
          data: {
            name: args.name ?? existingProduct.name,
            description: args.description ?? existingProduct.description,
            category: args.category ?? existingProduct.category,
            current: args.current ?? existingProduct.current,
            reoderLevel: args.reoderLevel ?? existingProduct.reoderLevel,
            unitCost: args.unitCost ?? existingProduct.unitCost,
            sellingPrice: args.sellingPrice ?? existingProduct.sellingPrice,
            taxInformation: args.taxInformation ?? existingProduct.taxInformation,
            imageURL: args.imageURL ?? existingProduct.imageURL,
            supplier: args.supplier ?? existingProduct.supplier,
          },
        });

        return updatedProduct;
      } catch (error) {
        throw new Error(`Error updating product: ${(error as Error).message}`);
      }
    },
  },
};
