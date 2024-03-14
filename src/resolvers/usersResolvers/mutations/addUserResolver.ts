import {
  PrismaClient,
  UserRole,
} from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const addUserResolver = {
  Mutation: {
    addUser: async (
      _: any,
      args: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        store1: boolean;
        store2: boolean;
        store3: boolean;
        store4: boolean;
        role: UserRole;
        company: string;
        type: string;
      }
    ) => {
      const { company, type, ...userData } = args;

      // Get dynamic database URL based on company and type
      const dynamicUsersDatabaseUrl = await getDynamicDatabaseUrl(
        company,
        type
      );

      // Set environment variable for database URL
      process.env.MONGODB_URL_USERS = dynamicUsersDatabaseUrl;

      const prisma = new PrismaClient();

      const userWithCompany = { ...userData, company };

      try {
        // Check if a user with the provided email already exists
        const existingUser = await prisma.users.findUnique({
          where: {
            email: userWithCompany.email,
          },
        });

        if (existingUser) {
          throw new Error("User with this email already exists");
        }

        // Create the user
        const createdUser = await prisma.users.create({
          data: userWithCompany,
        });

        if (!createdUser) {
          throw new Error("Failed to create user");
        }

        // Update the user with the company logo and image URL
        const updatedUser = await prisma.users.update({
          where: { id: createdUser.id },
          data: {
            companyLogo: `https://${company}.s3.us-west-1.amazonaws.com/${company}`,
            imageURL: `https://${company}.s3.us-west-1.amazonaws.com/${createdUser.id}`,
          },
        });

        if (!updatedUser) {
          throw new Error(`Failed to update user's company logo and image URL with ID ${createdUser.id}`);
        }

        return updatedUser;
      } catch (error) {
        throw new Error(`Failed to add user: ${(error as Error).message}`); // Rethrow the error with additional context
      } finally {
        await prisma.$disconnect();
      }
    },
  },
};
