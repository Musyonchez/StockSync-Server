import {
  PrismaClient,
  // UserRole,
} from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const authenticateUserResolver = {
  Query: {
    authenticateUser: async (
      _: any,
      {
        email,
        password,
        company,
      }: { email: string; password: string; company: string }
    ) => {
      // Get dynamic database URL based on company and type
      const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        "users"
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        // Find user by email
        const user = await prisma.users.findFirst({
          where: { email: email },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            store1: true,
            store2: true,
            store3: true,
            store4: true,
            company: true,
            role: true,
            firstsignin: true,
            active: true,
            companyLogo: true,
            imageURL: true,
          },
        });

        // If user not found, throw error
        if (!user) {
          throw new Error("User not found");
        }

        // Check if the user is active
        if (!user.active) {
          throw new Error("User is not active. Access denied.");
        }

        // Update temporaryAccessKey to "EMPTY" as part of authentication process
        await prisma.users.update({
          where: { id: user.id },
          data: {
            temporaryAccessKey: "EMPTY",
          },
        });

        // Check if the password matches
        const isPasswordValid = user.password === password;

        if (isPasswordValid) {
          // Return the user if authentication is successful
          return { ...user };
        } else {
          throw new Error("Invalid credentials");
        }
      } catch (error) {
        // Handle and rethrow the error
        throw new Error(`Error authenticating user: ${(error as Error).message}`);
      } finally {
        // Disconnect the Prisma client
        await prisma.$disconnect();
      }
    },
  },
};
