import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import userResolvers from "./resolvers/usersResolvers";
import typeDefsUsers from "./graphql/users";
import productsResolvers from "./resolvers/productsResolvers";
import typeDefsProducts from "./graphql/products";
import transactionsResolvers from "./resolvers/records/transactionsResolvers";
import typeDefsTransactions from "./graphql/transactions";
import writeoffsResolvers from "./resolvers/records/writeoffsResolvers";
import typeDefsWriteoffs from "./graphql/writeoffs";
import restockingResolvers from "./resolvers/records/restockingsResolvers";
import typeDefsRestockings from "./graphql/restocking";
import actionResolvers from "./resolvers/actions";

import uploadImage from "./components/uploadImage";

import multer from "multer";

const app = express();

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

const server = new ApolloServer({
  typeDefs: [
    typeDefsUsers,
    typeDefsProducts,
    typeDefsTransactions,
    typeDefsWriteoffs,
    typeDefsRestockings,
  ],
  resolvers: [
    userResolvers,
    productsResolvers,
    transactionsResolvers,
    writeoffsResolvers,
    restockingResolvers,
    actionResolvers,
  ],
  context: ({ req, res }) => ({ req, res }),
});

const port = process.env.PORT || 5000;

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (req.file) {
      console.log("file console server rest api", req.file);
      console.log("company console server rest api", req.body.company);

      // Handle file upload here
      await uploadImage(
        req.file.buffer,
        req.file.originalname,
        req.body.company
      );
    }
    // Send a response to the client
    res.json({ message: "File uploaded successfully!" });
  } catch (error) {
    console.error("Error handling file upload:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

async function startServer() {
  await server.start();

  server.applyMiddleware({ app } as any);

  app.use(express.json());

  app.listen({ port }, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
}

startServer();
