import { PrismaClient as StorePrismaClient } from "../../../prisma/generated/storeClient";
import { PrismaClient as WriteoffPrismaClient } from "../../../prisma/generated/writeoffsClient";
import { PrismaClient as UsersPrismaClient } from "../../../prisma/generated/usersClient";

import { getDynamicDatabaseUrl } from "../../components/database/GetynamicDatabaseUrl";

export const writeoffProductResolver = {
  Mutation: {
    writeoffProduct: async (
      _: any,
      {
        id,
        name,
        company,
        type,
        total,
        reason,
        filterArray,
      }: {
        id: string;
        name: string;
        company: string;
        type: string;
        total: number;
        reason: string;
        filterArray: {
          productId: string;
          toSubtract: number;
          quantity: number;
        }[];
      }
    ): Promise<boolean> => {
      if (!filterArray || filterArray.length === 0) {
        throw new Error("Filter array must not be empty.");
      }

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const storePrisma = new StorePrismaClient();
      const writeoffPrisma = new WriteoffPrismaClient();
      const userPrisma = new UsersPrismaClient();


      let allSucceeded = true;
      const addedWriteoffDetails: any[] = [];

      try {
        await storePrisma.$transaction(async (tx) => {
          for (const item of filterArray) {
            const productId = item.productId;
            const numberToSubtract = item.toSubtract;
            const productQuantity = item.quantity;

            const existingProduct = await tx.products.findUnique({
              where: { id: productId },
              select: {
                id: true,
                current: true,
              },
            });

            if (existingProduct === null) {
              throw new Error(`Product with ID ${productId} not found.`);
            } else if (
              existingProduct.current !== null &&
              existingProduct.current - numberToSubtract < 0
            ) {
              throw new Error(
                `Subtraction would result in a negative value for product ${productId}.`
              );
            }

            // Update the product's 'current' field
            const updatedProducts = await tx.products.update({
              where: { id: productId },
              data: {
                current: {
                  decrement: numberToSubtract,
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
                firstRecordAction: true,
              },
            });

            // Add the product details to the array
            addedWriteoffDetails.push({
              id: updatedProducts.id,
              name: updatedProducts.name,
              category: updatedProducts.category,
              current: updatedProducts.current,
              unitCost: updatedProducts.unitCost,
              sellingPrice: updatedProducts.sellingPrice,
              quantity: productQuantity,
            });
          }

           await writeoffPrisma.writeoffs.create({
            data: {
              creatorId: id,
              creatorName: name,
              totalAmount: total,
              reason: reason,
              details: addedWriteoffDetails,
            },
          });

           await userPrisma.users.update({
            where: { id: id }, // Replace userId with the actual variable or value
            data: {
              firstRecordAction: true,
            },
          });
          
        });
        console.log("addedTransactionDetails", addedWriteoffDetails);

        if (allSucceeded) {
          console.log(
            "Transaction succeeded, proceeding to create transaction record."
          );

        
        } else {
          console.log(
            "Transaction did not succeed. Skipping transaction details creation."
          );
        }

      } catch (error) {
        console.error("Error inside transaction:", error);
        allSucceeded = false;
      } finally {
        await storePrisma.$disconnect();
      }

      return allSucceeded;
    },
  },
};

export default writeoffProductResolver;
