/*
  Warnings:

  - You are about to drop the `cost` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "cost" DOUBLE PRECISION,
ADD COLUMN     "quantity" TEXT,
ALTER COLUMN "minimum" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "current" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "reorder" SET DATA TYPE DOUBLE PRECISION;

-- DropTable
DROP TABLE "cost";
