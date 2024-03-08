
import { transactionsResolver } from "./queries/transactionsResolver";
import { transactionResolver } from "./queries/transactionResolver";






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
