/*
  Warnings:

  - You are about to alter the column `current` on the `cost` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `previous` on the `cost` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `recent` on the `cost` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `minimum` on the `products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `current` on the `products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `reorder` on the `products` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "cost" ALTER COLUMN "current" SET DATA TYPE INTEGER,
ALTER COLUMN "previous" SET DATA TYPE INTEGER,
ALTER COLUMN "recent" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "minimum" SET DATA TYPE INTEGER,
ALTER COLUMN "current" SET DATA TYPE INTEGER,
ALTER COLUMN "reorder" SET DATA TYPE INTEGER;
