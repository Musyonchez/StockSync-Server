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

        return writeoffs;
      } catch (error) {
        console.error("Error fetching writeoffs:", error);
        throw new Error("Unable to fetch writeoffs.");
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
