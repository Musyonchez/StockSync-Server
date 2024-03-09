import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Products {
    id: String
    name: String
    description: String
    category: String
    current: Float
    reorderLevel: Float
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
    reorderLevel: Float
    unitCost: Float
    sellingPrice: Float
    taxInformation: Float
    imageURL: String
    supplier: String
    active: Boolean
    firstRecordAction: Boolean
  }

  input SearchFilterInput {
    field: String!
    value: String!
  }

  input SellFilterInput {
    productId: String!
    toSubtract: Float!
    quantity: Float!
  }

  input RestockingFilterInput {
    productId: String!
    toAdd: Float!
    quantity: Float!
  }

  input WriteoffFilterInput {
    productId: String!
    toSubtract: Float!
    quantity: Float!
  }

  input EditFilterInput {
    field: String!
    value: String!
  }

  type Query {
    products(company: String!, type: String!): [Products]
    activeProducts(company: String!, type: String!): [Product]
    inactiveProducts(company: String!, type: String!): [Product]
    product(id: String!, company: String!, type: String!): Product
    search(
      company: String!
      type: String!
      filterArray: [SearchFilterInput]!
    ): [Products]
  }

  type Mutation {
    addProduct(
      name: String
      description: String
      category: String
      imageURL: String
      company: String!
      type: String!
    ): Product

    editProduct(
      id: String!
      company: String
      type: String
      filterArray: [EditFilterInput]!
    ): Product

    deleteProduct(id: String!, company: String!, type: String!): Product

    deactivateProduct(id: String!, company: String!, type: String!): Product

    sellProduct(
      id: String!
      name: String!
      company: String!
      type: String!
      total: Float!
      filterArray: [SellFilterInput]!
    ): Boolean

    restockingProduct(
      id: String!
      name: String!
      company: String!
      type: String!
      filterArray: [RestockingFilterInput]!
    ): Boolean

    writeoffProduct(
      id: String!
      name: String!
      company: String!
      type: String!
      total: Float!
      reason: String!
      filterArray: [WriteoffFilterInput]!
    ): Boolean
  }
`;

export default typeDefs;
