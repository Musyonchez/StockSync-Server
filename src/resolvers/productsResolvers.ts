import { PrismaClient } from "../../prisma/generated/storeClient";
import { getDynamicDatabaseUrl } from "../components/database/GetynamicDatabaseUrl";

const productResolvers = {
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

    activeProducts: async (
      _: any,
      { company, type }: { company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      return await prisma.products.findMany({
        where: {
          active: true,
        },
      });
    },

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

  Mutation: {
    addProduct: async (
      _: any,
      args: {
        name: string;
        description: string;
        minimumQuantity: number;
        currentQuantity: number;
        reorderQuantity: number;
        costCurrent: number;
        costPrevious: number;
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

    editProduct: async (
      _: any,
      args: {
        id: string;
        name?: string;
        description?: string;
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

    deleteProduct: async (_: any, { id }: { id: string }) => {
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

export default productResolvers;
