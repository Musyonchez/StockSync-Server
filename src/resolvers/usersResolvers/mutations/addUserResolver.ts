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

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      
      const userWithCompany = { ...userData, company };
      
      try {
         // Create the user without additional details first
         const createdUser = await prisma.users.create({ data: userWithCompany });
         
        const updatedUser = await prisma.users.update({
          where: { id: createdUser.id },
          data: {
            companyLogo: `https://${company}.s3.us-west-1.amazonaws.com/${company}`,
            imageURL: `https://${company}.s3.us-west-1.amazonaws.com/${createdUser.id}`,
          },
        });

        return updatedUser;

      } catch (error) {
        console.error("Error creating user:", error);
        throw error; // Rethrow the error to be handled by your GraphQL server
      }
    },
  },
};
