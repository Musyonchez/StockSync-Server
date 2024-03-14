import { gql } from "apollo-server-express";

const typeDefs = gql`
  type WriteoffDetail {
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

  type Writeoff {
    id: String!
    details: [WriteoffDetail]
    createdAt: String!
    creatorId: String!
    creatorName: String!
    totalAmount: Float!
    reason: String!
  }

  type Query {
    getWriteoffs(company: String!, type: String!): [Writeoff]
    getWriteoff(id: String!, company: String!, type: String!): Writeoff
  }
`;

export default typeDefs;
