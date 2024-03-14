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

      console.log("Received product data:", productData, company, type);

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);
      console.log("Dynamic database URL:", dynamicDatabaseUrl);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;
      console.log("Updated process environment with database URL:", process.env.STOCKSYNC_STORE4);

      const prisma = new PrismaClient();

      // Create the product in the database
      console.log("Creating product in the database...");
      const createdProduct = await prisma.products.create({ data: productData });
      console.log("Product created:", createdProduct);

      // Generate the image URL
      const imageURL = `https://${company}.s3.us-west-1.amazonaws.com/${createdProduct.id}`;
      console.log("Generated image URL:", imageURL);

      // Update the product with the generated image URL
      console.log("Updating product with image URL...");
      const updatedProduct = await prisma.products.update({
        where: { id: createdProduct.id },
        data: { imageURL: imageURL }
      });
      console.log("Product updated with image URL:", updatedProduct);

      return updatedProduct;
    },
  },
};
