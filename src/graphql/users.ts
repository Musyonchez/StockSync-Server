import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Users {
    id: String
    firstName: String
    lastName: String
    email: String
    store1: Boolean
    store2: Boolean
    store3: Boolean
    store4: Boolean
    role: UserRole
  }

  type User {
    id: String
    firstName: String
    lastName: String
    email: String
    store1: Boolean
    store2: Boolean
    store3: Boolean
    store4: Boolean
    company: String
    role: UserRole
    firstsignin: Boolean
  }

  enum UserRole {
    ADMIN
    USER
  }

  input EditFilterInput {
    field: String!
    value: String!
  }

  type Query {
    users(company: String!, type: String!): [Users]
    user(id: String!, company: String!, type: String!): User
    authenticateUser(email: String!, password: String!, company: String!): User
  }

  type Mutation {
    addUser(
      firstName: String
      lastName: String
      email: String
      password: String
      store1: Boolean
      store2: Boolean
      store3: Boolean
      store4: Boolean
      role: UserRole
      company: String
      type: String
    ): User

    editUser(
      id: String!
      company: String
      type: String
      filterArray: [EditFilterInput]!
    ): User

    deleteUser(id: String!, company: String!, type: String!): User
  }
`;

export default typeDefs;
