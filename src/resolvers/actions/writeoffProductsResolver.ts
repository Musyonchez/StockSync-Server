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
      // Check if the filterArray is empty
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
      const writeoffPrisma = new WriteoffPrismaClient();
      const userPrisma = new UsersPrismaClient();

      let allSucceeded = true;
      const addedWriteoffDetails: any[] = [];

      try {
        // Perform transaction to update store, writeoff, and user records
        await userPrisma.$transaction(async (tz) => {
          await writeoffPrisma.$transaction(async (ty) => {
            await storePrisma.$transaction(async (tx) => {
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

                // If product does not exist or quantity is insufficient, throw an error
                if (
                  existingProduct === null ||
                  existingProduct.current === null ||
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

              // Create writeoff record
              const writeoff = await ty.writeoffs.create({
                data: {
                  creatorId: id,
                  creatorName: name,
                  totalAmount: total,
                  reason: reason,
                  details: addedWriteoffDetails,
                },
              });

              // If writeoff creation fails, throw an error
              if (!writeoff) {
                throw new Error(
                  `Failed to create writeoff record for user with ID ${id}.`
                );
              }

              // Check if the user exists before updating the record
              const existingUser = await tz.users.findUnique({
                where: { id: id },
              });

              // If user does not exist, throw an error
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

              // If user update fails, throw an error
              if (!updatedUser) {
                throw new Error(
                  `Failed to update user record for user with ID ${id}.`
                );
              }
            });
          });
        });

        // If any operation failed during the writeoff, set allSucceeded to false
        if (!allSucceeded) {
          throw new Error(`Writeoff failed. Rolling back changes.`);
        }
      } catch (error) {
        // If any error occurs during the writeoff, set allSucceeded to false and throw the error
        allSucceeded = false;
        throw new Error(`Error during Writeoff: ${(error as Error).message}`);
      } finally {
        // Disconnect from the database after transaction completion
        await storePrisma.$disconnect();
      }

      return allSucceeded;
    },
  },
};

export default writeoffProductResolver;
