-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),
    "age" INTEGER,
    "email" VARCHAR(255),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
