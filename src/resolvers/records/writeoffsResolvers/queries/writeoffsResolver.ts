import { PrismaClient } from "../../../../../prisma/generated/writeoffsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const writeoffsResolver = {
  Query: {
    getWriteoffs: async (
      _: any,
      { company, type }: { company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const writeoffs = await prisma.writeoffs.findMany();

        // Format the createdAt field before returning the list of writeoffs
        const formattedWriteoffs = writeoffs.map((writeoff) => ({
          ...writeoff,
          createdAt: writeoff.createdAt.toLocaleString(), // Format createdAt
        }));

        return formattedWriteoffs;
      } catch (error) {
        console.error("Error fetching writeoffs:", error);
        throw new Error("Unable to fetch writeoffs.");
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
