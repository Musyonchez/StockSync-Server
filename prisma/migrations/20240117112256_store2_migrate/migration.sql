/*
  Warnings:

  - You are about to drop the column `cost` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "cost",
ADD COLUMN     "costCurrent" DOUBLE PRECISION,
ADD COLUMN     "costPrevious" DOUBLE PRECISION;
