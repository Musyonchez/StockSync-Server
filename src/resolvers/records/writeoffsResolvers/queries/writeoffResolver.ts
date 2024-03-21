import { PrismaClient } from "../../../../../prisma/generated/writeoffsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const writeoffResolver = {
  Query: {
    getWriteoff: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
      // Get dynamic database URL based on company and type
      const dynamicProductsDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        type
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_PRODUCTS = dynamicProductsDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const writeoff = await prisma.writeoffs.findUnique({
          where: {
            id: id,
          },
        });

        if (!writeoff) {
          throw new Error(`Writeoff with ID ${id} not found.`);
        }

        // Format the createdAt field before returning
        return {
          ...writeoff,
          createdAt: new Date(writeoff.createdAt).toLocaleString("en-US", {
            timeZone: "Africa/Nairobi",
          }),
        };
      } catch (error) {
        throw new Error(
          `Unable to fetch writeoff: ${(error as Error).message}`
        );
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
