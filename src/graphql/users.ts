import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Users {
    id: String
    firstName: String
    lastName: String
    age: Int
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
    age: Int
    email: String
    password: String
    store1: Boolean
    store2: Boolean
    store3: Boolean
    store4: Boolean
    company: String
    role: UserRole
  }

  enum UserRole {
    SUPERADMIN
    ADMIN
    USER
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
      age: Int
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
      firstName: String
      lastName: String
      age: Int
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

    deleteUser(id: String!, company: String!, type: String!): User
  }
`;

export default typeDefs;
