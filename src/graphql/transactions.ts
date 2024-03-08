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
    creatorName: String!
    createdAt: String!
    totalAmount: Float!
  }

  type Query {
    getTransaction(company: String!, type: String!): [Transaction]
    getTransactions(id: String!, company: String!, type: String!): Transaction
  }


`;

export default typeDefs;