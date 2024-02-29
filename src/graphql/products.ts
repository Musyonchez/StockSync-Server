import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Products {
    id: String
    name: String
    description: String
    category: String
    current: Float
    reoderLevel: Float
    unitCost: Float
    sellingPrice: Float
    taxInformation: Float
    imageURL: String
    supplier: String
    active: Boolean
  }

  type Product {
    id: String
    name: String
    description: String
    category: String
    current: Float
    reoderLevel: Float
    unitCost: Float
    sellingPrice: Float
    taxInformation: Float
    imageURL: String
    supplier: String
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
      category: String
      company: String!
      type: String!
    ): Product

    editProduct(
      id: String!
      name: String
      description: String
      category: String
      current: Float
      reoderLevel: Float
      unitCost: Float
      sellingPrice: Float
      taxInformation: Float
      imageURL: String
      supplier: String
      company: String!
      type: String!
    ): Product

    deleteProduct(id: String!, company: String!, type: String!): Product

    deactivateProduct(id: String!, company: String!, type: String!): Product
  }
`;

export default typeDefs;
