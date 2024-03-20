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

// Set up multer for file uploading
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Create an Apollo Server instance
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
  context: ({ req, res }) => ({ req, res }), // Pass the request and response objects to the context
});

// Set up the port for the server
const port = process.env.PORT || 5000;

// Handle file upload endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // Check if a file is uploaded
    if (!req.file) {
      // If no file is uploaded, return an error response
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Handle file upload
    await uploadImage(req.file.buffer, req.file.originalname, req.body.company);

    // Send a success response to the client
    res.json({ message: "File uploaded successfully!" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: (error as Error).message });
  }
  return undefined; // Explicitly return undefined to satisfy TypeScript
});

// Start the Apollo Server
async function startServer() {
  await server.start();

  // Apply Apollo Server middleware to Express
  server.applyMiddleware({ app } as any);

  // Enable JSON parsing for Express
  app.use(express.json());

  // Start listening on the specified port
  app.listen({ port }, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });
}

// Start the server
startServer();
