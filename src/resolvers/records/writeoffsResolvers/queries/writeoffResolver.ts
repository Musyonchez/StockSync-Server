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

      return await prisma.writeoffs.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
};
