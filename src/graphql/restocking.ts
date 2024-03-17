import { gql } from "apollo-server-express";

const typeDefs = gql`
  type RestockingDetail {
    id: String!
    name: String!
    category: String!
    current: Float!
    unitCost: Float!
    sellingPrice: Float!
    supplier: String!
    quantity: Int!
  }

  type Restocking {
    id: String!
    details: [RestockingDetail]
    creatorId: String!
    creatorName: String!
    createdAt: String!
    totalAmount: Float!
  }

  type Query {
    getRestockings(company: String!, type: String!): [Restocking]
    getRestocking(id: String!, company: String!, type: String!): Restocking
  }
`;

export default typeDefs;
