// server.ts
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors'; // Import the cors middleware
import userResolvers from './resolvers/usersResolvers';
import typeDefsUsers from './graphql/users';
import productsResolvers from './resolvers/productsResolvers';
import typeDefsProducts from './graphql/products';
// import { PrismaClient  } from '../prisma/generated/usersClient'; // Adjust the path as needed
// import { getDynamicDatabaseUrl } from './components/database/GetynamicDatabaseUrl'; // Import the component

const app = express();

// Use the cors middleware
app.use(cors());


const server = new ApolloServer({
  typeDefs: [typeDefsUsers, typeDefsProducts],
  resolvers: [userResolvers, productsResolvers],
  context: ({ req, res }) => ({ req, res }),
});

const port = process.env.PORT || 5000;

async function startServer() {
  // Dynamically set the DATABASE_URL before initializing Prisma
  // const userId = 'store1'; // Replace with the actual user ID or logic to determine the user
  // const dynamicDatabaseUrl = await getDynamicDatabaseUrl(userId);

  // process.env.DATABASE_URL = dynamicDatabaseUrl;

  // const prisma = new PrismaClient();

  await server.start();

  server.applyMiddleware({ app } as any);

  app.use(express.json());

  app.listen({ port }, () => {
    console.log(`Server is running at http://localhost:${port}/graphql`);
  });

  // Now, you can connect to the database using Prisma
  // await prisma.$connect();
}

startServer();































// // server.ts

// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import userResolvers from './resolvers/usersResolvers';
// import typeDefsUsers from './graphql/users';
// import productsResolvers from './resolvers/productsResolvers'; // Import products resolvers
// import typeDefsProducts from './graphql/products'; // Import products type definitions

// const app = express();

// const server = new ApolloServer({
//   typeDefs: [typeDefsUsers, typeDefsProducts], // Combine user and product type definitions
//   resolvers: [userResolvers, productsResolvers], // Combine user and product resolvers
//   context: ({ req, res }) => ({ req, res }),
// });

// const port = process.env.PORT || 5000;

// async function startServer() {
//   await server.start();

//   server.applyMiddleware({ app } as any);

//   app.use(express.json());

//   app.listen({ port }, () => {
//     console.log(`Server is running at http://localhost:${port}/graphql`);
//   });
// }

// startServer();

















































// // server.ts

// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import avatarResolvers from './resolvers/usersResolvers';
// import typeDefs from './graphql/users';
// const { initializePrisma } = require('./dbConfig');
// // import fs from 'fs';
// // import path from 'path';

// const app = express();

// // const typeDefs = fs.readFileSync(path.join(__dirname, './src/graphql/avatar.ts'), 'utf8');


// const currentClient = 'Store1'; // Change this dynamically based on your logic


// const server = new ApolloServer({
//   typeDefs,
//   resolvers: avatarResolvers,
//   context: ({ req, res }) => ({ req, res }),
// });

// const port = process.env.PORT || 3000;


// async function startServer() {
//   await server.start();

//   server.applyMiddleware({ app } as any );

//   await initializePrisma(currentClient);

//   app.use(express.json());  // Uncomment this line

//   app.listen({ port }, () => {
//     console.log(`Server is running at http://localhost:${port}/graphql`);
//   });
// }

// startServer();


















































// graphqlServer.ts

// import express, { Application } from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';
// import prisma from './src/prisma';

// const app: Application = express();
// const port = 3000;  // Declare port here

// const typeDefs = gql`
//   type Avatar {
//     id: Int
//     name: String
//     age: Int
//     email: String
//   }

//   type Query {
//     avatars: [Avatar]
//   }

//   type Mutation {
//     addAvatar(name: String, age: Int, email: String): Avatar
//   }
// `;

// const resolvers = {
//   Query: {
//     avatars: async () => {
//       return await prisma.avatars.findMany();
//     },
//   },
//   Mutation: {
//     addAvatar: async (_: any, args: { name: string; age: number; email: string }) => {
//       return await prisma.avatars.create({ data: args });
//     },
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// async function startServer() {
//   await server.start();

//   server.applyMiddleware( {app} as any );

//   app.use(express.json());  // Uncomment this line

//   app.listen({ port }, () => {
//     console.log(`Server is running at http://localhost:${port}/graphql`);
//   });
// }

// startServer();
































































// app.use(express.json());

// app.post('/add-avatars', async (_req: Request<{}, {}, UserData>, res: Response) => {
//   const avatarsData: UserData[] = [
//     { email: 'user1@example.com', name: 'User1', age: 25 },


//     // ... (other avatars)
//   ];

//   try {
//     const insertedAvatars = await prisma.avatars.createMany({
//       data: avatarsData,
//     });

//     res.json(insertedAvatars);
//   } catch (error) {
//     console.error('Error executing query:', error);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   // console.log(`Server is running at http://localhost:${port}`);
//   console.log(`Server is running at http://localhost:${port}/graphql`);

// });





































// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema

// generator client {
//   provider = "prisma-client-js"
// }

// datasource db {
//   provider = "postgresql"
//   url      = env("DATABASE_URL")
// }

// // prisma/schema.prisma

// // prisma/schema.prisma

// model Avatar {
//   id    Int     @id @default(autoincrement())
//   name  String
//   age   Int
//   email String
// }
