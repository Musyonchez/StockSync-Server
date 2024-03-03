import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Transactions {
    id: String
    name: String
    category: String
    current: Float
    unitCost: Float
    sellingPrice: Float
    taxInformation: Float
    supplier: String
  }

  type Transaction {
    id: String
    name: String
    category: String
    current: Float
    unitCost: Float
    sellingPrice: Float
    taxInformation: Float
    supplier: String
  }

  input TransactionFilterInput {
    field: String!
    value: Float!
  }


  type Query {
    Transactions(company: String!, type: String!): [Transactions]
    Transaction(id: String!, company: String!, type: String!): Transaction
  }

  type Mutation {
    addedTransactionDetails(
      id: String
      name: String
      category: String
      current: Float
      unitCost: Float
      sellingPrice: Float
      taxInformation: Float
      supplier: String
      transactionId: String
    ): Transaction
  }
  
`;

export default typeDefs;
