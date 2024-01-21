/*
  Warnings:

  - You are about to drop the column `secondName` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "secondName",
ADD COLUMN     "lastName" VARCHAR(255);
