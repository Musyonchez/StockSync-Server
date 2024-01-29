import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import userResolvers from "./resolvers/usersResolvers";
import typeDefsUsers from "./graphql/users";
import productsResolvers from "./resolvers/productsResolvers";
import typeDefsProducts from "./graphql/products";

const app = express();

app.use(cors());

const server = new ApolloServer({
  typeDefs: [typeDefsUsers, typeDefsProducts],
  resolvers: [userResolvers, productsResolvers],
  context: ({ req, res }) => ({ req, res }),
});

const port = process.env.PORT || 5000;

async function startServer() {
  await server.start();

  server.applyMiddleware({ app } as any);

  app.use(express.json());

  app.listen({ port }, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
}

startServer();
