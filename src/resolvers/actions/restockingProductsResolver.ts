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
      process.env.MONGODB_URL = dynamicProductsDatabaseUrl;

      // Initialize Prisma clients for interacting with databases
      const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        "users"
      );
      // Set environment variable for database URL
      process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

      const storePrisma = new StorePrismaClient();
      const restockingPrisma = new RestockingPrismaClient();
      const userPrisma = new UsersPrismaClient();

      // Initialize variables to track operation success and restocking details
      let allSucceeded = true;
      const addedRestockingDetails: any[] = [];

      try {
        // Perform transaction to update store and restocking records
        await storePrisma.$transaction(async (tx) => {
          await restockingPrisma.$transaction(async (ty) => {
            await userPrisma.$transaction(async (tz) => {
              // Loop through each item in the filterArray
              for (const item of filterArray) {
                const productId = item.productId;
                const numberToAdd = item.toAdd;
                const productQuantity = item.quantity;

                // Check if the product exists in the database
                const existingProduct = await tx.products.findUnique({
                  where: { id: productId },
                  select: {
                    id: true,
                  },
                });

                // If product does not exist, throw an error
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

                // If product update fails, throw an error
                if (updatedProducts === null) {
                  throw new Error(
                    `Failed to update product with ID ${productId}.`
                  );
                }

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

              // Create restocking record
              const restockingProduct = await ty.restockings.create({
                data: {
                  creatorId: id,
                  creatorName: name,
                  details: addedRestockingDetails,
                },
              });

              if (!restockingProduct) {
                throw new Error(`Failed to create restocking record for user with ID ${id}.`);
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
                throw new Error(`Failed to update user record for user with ID ${id}.`);
              }
            });
          });
        });

        // Check if any operation failed during the transaction
        if (!allSucceeded) {
          throw new Error(`Transaction failed. Rolling back changes.`);
        }
      } catch (error) {
        // If any error occurs during the transaction, set allSucceeded to false and throw the error
        allSucceeded = false;
        throw new Error(`Error during restocking: ${(error as Error).message}`);
      } finally {
        // Disconnect from the database after transaction completion
        await storePrisma.$disconnect();
      }

      // Return the status of the operation
      return allSucceeded;
    },
  },
};

export default restockingProductResolver;
