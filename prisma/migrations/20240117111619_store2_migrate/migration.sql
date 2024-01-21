/*
  Warnings:

  - You are about to drop the column `current` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `minimum` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `reorder` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "current",
DROP COLUMN "minimum",
DROP COLUMN "reorder",
ADD COLUMN     "currentQuantity" DOUBLE PRECISION,
ADD COLUMN     "minimumQuantity" DOUBLE PRECISION,
ADD COLUMN     "reorderQuantity" DOUBLE PRECISION;
