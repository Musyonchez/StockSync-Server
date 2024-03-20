import { gql } from "apollo-server-express";

const typeDefs = gql`
  type TransactionDetail {
    id: String!
    name: String!
    category: String!
    current: Float!
    unitCost: Float!
    sellingPrice: Float!
    taxInformation: Float!
    supplier: String!
    quantity: Int!
  }

  type Transaction {
    id: String!
    details: [TransactionDetail]
    createdAt: String!
    creatorId: String!
    creatorName: String!
    totalAmount: Float!
    totalProducts: Int
  }

  type Query {
    getTransactions(company: String!, type: String!, take: Int, skip: Int): [Transaction]
    getTransaction(id: String!, company: String!, type: String!): Transaction
  }
`;

export default typeDefs;
