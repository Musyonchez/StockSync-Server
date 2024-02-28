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
              group?: string
              minimumQuantity?: number;
              currentQuantity?: number;
              reorderQuantity?: number;
              costCurrent?: number;
              costPrevious?: number;
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
                  group: args.name ?? existingProduct.group,
                  minimumQuantity:
                    args.minimumQuantity ?? existingProduct.minimumQuantity,
                  currentQuantity:
                    args.currentQuantity ?? existingProduct.currentQuantity,
                  reorderQuantity:
                    args.reorderQuantity ?? existingProduct.reorderQuantity,
                  costCurrent: args.costCurrent ?? existingProduct.costCurrent,
                  costPrevious: args.costPrevious ?? existingProduct.costPrevious,
                },
              });
      
              return updatedProduct;
            } catch (error) {
              throw new Error(`Error updating product: ${(error as Error).message}`);
            }
          },
  },
};
