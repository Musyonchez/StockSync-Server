import { transactionResolver } from "./queries/transactionResolver";
import { transactionsResolver } from "./queries/transactionsResolver";

// Merge the query resolvers for transaction and transactions
const typeDefsTransactions = {
  Query: {
    ...transactionResolver.Query,
    ...transactionsResolver.Query,
  },
  Mutation: {
    // No mutation resolvers yet
  },
};

export default typeDefsTransactions;
