/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" VARCHAR(255),
    "minimum" DOUBLE PRECISION,
    "current" DOUBLE PRECISION,
    "reorder" DOUBLE PRECISION,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cost" (
    "id" TEXT NOT NULL,
    "current" DOUBLE PRECISION,
    "previous" DOUBLE PRECISION,
    "recent" DOUBLE PRECISION,

    CONSTRAINT "cost_pkey" PRIMARY KEY ("id")
);
