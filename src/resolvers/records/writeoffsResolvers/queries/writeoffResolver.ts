import { PrismaClient } from "../../../../../prisma/generated/writeoffsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const writeoffResolver = {
  Query: {
    getWriteoff: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const writeoff = await prisma.writeoffs.findUnique({
          where: {
            id: id,
          },
        });

        if (!writeoff) {
          throw new Error("Writeoff not found");
        }

        // Format the createdAt field before returning
        const formattedWriteoff = {
          ...writeoff,
          createdAt: writeoff.createdAt.toLocaleString(), // Format createdAt
        };

        return formattedWriteoff;
      } catch (error) {
        console.error("Error fetching writeoff:", error);
        throw new Error("Unable to fetch writeoff.");
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
