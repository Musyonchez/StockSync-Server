// import { PrismaClient } from "../../../../prisma/generated/storeClient";
// import { PrismaClient } from "../../../../prisma/generated/transactionsClient";
// import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

// export const addTransactionResolver = {
//   Mutation: {
//     addTransaction: async (
//       _: any,
//       {
//         company,
//         type,
//         filterArray,
//       }: {
//         company: string;
//         type: string;
//         filterArray: { field: string; value: number }[];
//       }
//     ): Promise<boolean> => {
//       if (!filterArray || filterArray.length === 0) {
//         throw new Error("Filter array must not be empty.");
//       }

//       const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

//       process.env.STOCKSYNC_STORE4 = dynamicDatabaseUrl;

//       const prisma = new PrismaClient();

     
// };

// export default addTransactionResolver;
