/*
  Warnings:

  - You are about to drop the `cost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cost" DROP CONSTRAINT "cost_productId_fkey";

-- DropTable
DROP TABLE "cost";

-- DropTable
DROP TABLE "products";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "firstName" VARCHAR(255),
    "lastName" VARCHAR(255),
    "age" INTEGER,
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "store1" BOOLEAN NOT NULL DEFAULT false,
    "store2" BOOLEAN NOT NULL DEFAULT false,
    "store3" BOOLEAN NOT NULL DEFAULT false,
    "store4" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
