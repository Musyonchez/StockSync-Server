import { PrismaClient as StorePrismaClient } from "../../../prisma/generated/storeClient";
import { PrismaClient as RestockingPrismaClient } from "../../../prisma/generated/restockingsClient";
import { PrismaClient as UsersPrismaClient } from "../../../prisma/generated/usersClient";

import { getDynamicDatabaseUrl } from "../../components/database/GetynamicDatabaseUrl";

export const restockingProductResolver = {
  Mutation: {
    restockingProduct: async (
      _: any,
      {
        id,
        name,
        company,
        type,
        filterArray,
      }: {
        id: string;
        name: string;
        company: string;
        type: string;
        filterArray: {
          productId: string;
          toAdd: number;
          quantity: number;
        }[];
      }
    ): Promise<boolean> => {
      if (!filterArray || filterArray.length === 0) {
        throw new Error("Filter array must not be empty.");
      }

      console.log("restocking products mutation initiated", name)

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const storePrisma = new StorePrismaClient();
      const restockingPrisma = new RestockingPrismaClient();
      const userPrisma = new UsersPrismaClient();


      let allSucceeded = true;
      const addedRestockingDetails: any[] = [];

      try {
        await storePrisma.$transaction(async (tx) => {
          for (const item of filterArray) {
            const productId = item.productId;
            const numberToAdd = item.toAdd;
            const productQuantity = item.quantity;

            const existingProduct = await tx.products.findUnique({
              where: { id: productId },
              select: {
                id: true,
              },
            });

            if (existingProduct === null) {
              throw new Error(`Product with ID ${productId} not found.`);
            }

            // Update the product's 'current' field
            const updatedProducts = await tx.products.update({
              where: { id: productId },
              data: {
                current: {
                  increment: numberToAdd,
                },
                firstRecordAction: true,
              },
              select: {
                id: true,
                name: true,
                category: true,
                current: true,
                unitCost: true,
                sellingPrice: true,
                supplier: true,
                firstRecordAction: true,
              },
            });

            // Add the product details to the array
            addedRestockingDetails.push({
              id: updatedProducts.id,
              name: updatedProducts.name,
              category: updatedProducts.category,
              current: updatedProducts.current,
              unitCost: updatedProducts.unitCost,
              sellingPrice: updatedProducts.sellingPrice,
              supplier: updatedProducts.supplier,
              quantity: productQuantity,
            });
          }

          await restockingPrisma.restockings.create({
            data: {
              creatorId: id,
              creatorName: name,
              details: addedRestockingDetails,
            },
          });

         await userPrisma.users.update({
            where: { id: id }, // Replace userId with the actual variable or value
            data: {
              firstRecordAction: true,
            },
          });
          
        });
        console.log("addedRestockingDetails", addedRestockingDetails);

        if (allSucceeded) {
          console.log(
            "Restocking succeeded, proceeding to create Restocking record."
          );

        
        } else {
          console.log(
            "Restocking did not succeed. Skipping Restocking details creation."
          );
        }

        // ... (remaining code)
      } catch (error) {
        console.error("Error inside Restocking:", error);
        allSucceeded = false;
      } finally {
        await storePrisma.$disconnect();
      }

      return allSucceeded;
    },
  },
};

export default restockingProductResolver;
