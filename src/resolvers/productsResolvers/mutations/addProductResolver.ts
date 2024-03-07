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

        // Create the product in the database
        const createdProduct = await prisma.products.create({ data: productData });

        // Generate the image URL
        const imageURL = `https://${company}.s3.us-west-1.amazonaws.com/${createdProduct.id}`;

        // Update the product with the generated image URL
        const updatedProduct = await prisma.products.update({
            where: { id: createdProduct.id },
            data: { imageURL: imageURL }
        });

        return updatedProduct;
      },
  },
};
