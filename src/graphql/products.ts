import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Products {
    id: String
    name: String
    description: String
    minimumQuantity: Float
    currentQuantity: Float
    reorderQuantity: Float
    costCurrent: Float
    costPrevious: Float
    active: Boolean
  }

  type Product {
    id: String
    name: String
    description: String
    minimumQuantity: Float
    currentQuantity: Float
    reorderQuantity: Float
    costCurrent: Float
    costPrevious: Float
    active: Boolean
  }

  type Query {
    products(company: String!, type: String!): [Products]
    activeProducts(company: String!, type: String!): [Product]
    inactiveProducts(company: String!, type: String!): [Product]
    product(id: String!, company: String!, type: String!): Product
  }

  type Mutation {
    addProduct(
      name: String
      description: String
      minimumQuantity: Float
      currentQuantity: Float
      reorderQuantity: Float
      costCurrent: Float
      costPrevious: Float
      company: String!
      type: String!
    ): Product

    editProduct(
      id: String!
      name: String
      description: String
      minimumQuantity: Float
      currentQuantity: Float
      reorderQuantity: Float
      costCurrent: Float
      costPrevious: Float
      company: String!
      type: String!
    ): Product

    deleteProduct(id: String!, company: String!, type: String!): Product

    deactivateProduct(id: String!, company: String!, type: String!): Product
  }
`;

export default typeDefs;
