
import { transactionResolver } from "./queries/transactionResolver";
import { transactionsResolver } from "./queries/transactionsResolver";






const typeDefsTransactions = {
  Query: {
    ...transactionResolver.Query,
    ...transactionsResolver.Query,




  },

  Mutation: {
    // ...addTransactionResolver.Mutation,


  },
};

export default typeDefsTransactions;
