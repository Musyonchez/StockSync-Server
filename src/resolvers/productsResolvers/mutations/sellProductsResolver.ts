import { PrismaClient as StorePrismaClient } from "../../../../prisma/generated/storeClient";
import { PrismaClient as TransactionsPrismaClient } from "../../../../prisma/generated/transactionsClient";

import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const sellProductResolver = {
  Mutation: {
    sellProduct: async (
      _: any,
      {
        company,
        type,
        total,
        filterArray,
      }: {
        company: string;
        type: string;
        total: number;
        filterArray: { productId: string; toSubtract: number; quantity: number;}[];
      }
    ): Promise<boolean> => {
      if (!filterArray || filterArray.length === 0) {
        throw new Error("Filter array must not be empty.");
      }

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const storePrisma = new StorePrismaClient();
      const transactionsPrisma = new TransactionsPrismaClient();

      let allSucceeded = true;
      const addedTransactionDetails: any[] = [];

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
                name: true,
                category: true,
                current: true,
                unitCost: true,
                sellingPrice: true,
                taxInformation: true,
                supplier: true,
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
            await tx.products.update({
              where: { id: productId },
              data: {
                current: {
                  decrement: numberToSubtract,
                },
              },
            });

            // Add the product details to the array
            addedTransactionDetails.push({
              id: existingProduct.id,
              name: existingProduct.name,
              category: existingProduct.category,
              current: existingProduct.current,
              unitCost: existingProduct.unitCost,
              sellingPrice: existingProduct.sellingPrice,
              taxInformation: existingProduct.taxInformation,
              supplier: existingProduct.supplier,
              quantity: productQuantity,
            });
          }
        });
        console.log("addedTransactionDetails", addedTransactionDetails);
       
        if (allSucceeded) {
          console.log("Transaction succeeded, proceeding to create transaction record.");
        
          const newTransaction = await transactionsPrisma.transactions.create({
            data: {
              totalAmount: total,
              details: addedTransactionDetails,
            },
          });
        
          console.log("New transaction created with ID:", newTransaction.id);
        } else {
          console.log("Transaction did not succeed. Skipping transaction details creation.");
        }
        

        // ... (remaining code)
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

export default sellProductResolver;
