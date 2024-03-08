import { PrismaClient } from "../../../../../prisma/generated/restockingsClient";
import { getDynamicDatabaseUrl } from "../../../../components/database/GetynamicDatabaseUrl";

export const restockingResolver = {
  Query: {
    getRestocking: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      return await prisma.restockings.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
};
