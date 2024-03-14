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

      // Get dynamic database URL based on company and type
      const dynamicProductsDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        type
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_PRODUCTS = dynamicProductsDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        // Create the product in the database
        const createdProduct = await prisma.products.create({
          data: productData,
        });

        if (!createdProduct) {
          throw new Error(`Failed to create product.`);
        }

        // Generate the image URL
        const imageURL = `https://${company}.s3.us-west-1.amazonaws.com/${createdProduct.id}`;

        // Update the product with the generated image URL
        const updatedProduct = await prisma.products.update({
          where: { id: createdProduct.id },
          data: { imageURL: imageURL },
        });

        if (!updatedProduct) {
          throw new Error(`Failed to update product with image URL.`);
        }

        return updatedProduct;
      } catch (error) {
        throw new Error(
          `Error while adding product: ${(error as Error).message}`
        );
      } finally {
        // Disconnect from the database after operation completion
        await prisma.$disconnect();
      }
    },
  },
};
