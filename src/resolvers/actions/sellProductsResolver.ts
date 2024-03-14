import { PrismaClient as StorePrismaClient } from "../../../prisma/generated/storeClient";
import { PrismaClient as TransactionsPrismaClient } from "../../../prisma/generated/transactionsClient";
import { PrismaClient as UsersPrismaClient } from "../../../prisma/generated/usersClient";

import { getDynamicDatabaseUrl } from "../../components/database/GetynamicDatabaseUrl";

export const sellProductResolver = {
  Mutation: {
    sellProduct: async (
      _: any,
      {
        id,
        name,
        company,
        type,
        total,
        filterArray,
      }: {
        id: string;
        name: string;
        company: string;
        type: string;
        total: number;
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

      // Get dynamic database URL based on company and type
      const dynamicProductsDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        type
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_PRODUCTS = dynamicProductsDatabaseUrl;

      // Initialize Prisma clients for interacting with databases
      const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        "users"
      );
      // Set environment variable for database URL
      process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

      const storePrisma = new StorePrismaClient();
      const transactionsPrisma = new TransactionsPrismaClient();
      const userPrisma = new UsersPrismaClient();

      let allSucceeded = true;
      const addedTransactionDetails: any[] = [];

      try {
        // Perform transaction to update store and transaction records
        await storePrisma.$transaction(async (tx) => {
          await transactionsPrisma.$transaction(async (ty) => {
            await userPrisma.$transaction(async (tz) => {
              // Loop through each item in the filterArray
              for (const item of filterArray) {
                const productId = item.productId;
                const numberToSubtract = item.toSubtract;
                const productQuantity = item.quantity;

                // Check if the product exists in the database
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
                    `Insufficient quantity for product ${productId}.`
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
                    taxInformation: true,
                    supplier: true,
                    firstRecordAction: true,
                  },
                });

                // If product update fails, throw an error
                if (updatedProducts === null) {
                  throw new Error(
                    `Failed to update product with ID ${productId}.`
                  );
                }

                // Add the product details to the array
                addedTransactionDetails.push({
                  id: updatedProducts.id,
                  name: updatedProducts.name,
                  category: updatedProducts.category,
                  current: updatedProducts.current,
                  unitCost: updatedProducts.unitCost,
                  sellingPrice: updatedProducts.sellingPrice,
                  taxInformation: updatedProducts.taxInformation,
                  supplier: updatedProducts.supplier,
                  quantity: productQuantity,
                });
              }

              // Create transaction record
              const transaction = await ty.transactions.create({
                data: {
                  creatorId: id,
                  creatorName: name,
                  totalAmount: total,
                  details: addedTransactionDetails,
                },
              });

              if (!transaction) {
                throw new Error(
                  `Failed to create transaction record for user with ID ${id}.`
                );
              }

              // Check if the user exists before updating the record
              const existingUser = await tz.users.findUnique({
                where: { id: id },
              });

              if (!existingUser) {
                throw new Error(`User with ID ${id} not found.`);
              }

              // Update user record to indicate action
              const updatedUser = await tz.users.update({
                where: { id: id },
                data: {
                  firstRecordAction: true,
                },
              });

              if (!updatedUser) {
                throw new Error(
                  `Failed to update user record for user with ID ${id}.`
                );
              }
            });
          });
        });

        // If any operation failed during the transaction, set allSucceeded to false
        if (!allSucceeded) {
          throw new Error(`Transaction failed. Rolling back changes.`);
        }
      } catch (error) {
        allSucceeded = false;
        throw new Error(`Error during selling: ${(error as Error).message}`);
      } finally {
        await storePrisma.$disconnect();
      }

      return allSucceeded;
    },
  },
};

export default sellProductResolver;
