import {
  PrismaClient,
  UserRole,
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
      console.log(
        "authenticateUser resolver starting",
        email,
        password,
        company
      );

      const type = "users";
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      // Use type assertion to tell TypeScript that you know the type of user
      const user = (await prisma.users.findFirst({
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
        },
      })) as {
        id: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        password?: string;
        store1?: boolean;
        store2?: boolean;
        store3?: boolean;
        store4?: boolean;
        company?: string;
        role?: UserRole;
        firstsignin?: boolean;
        active?: boolean;
      } | null;

      if (!user) {
        console.log("User not found", email);
        throw new Error("User not found");
      }

      // Check if the user is active
      if (!user.active) {
        console.log("User is not active. Access denied.", email, user);
        throw new Error("User is not active. Access denied.");
      }

      await prisma.users.update({
        where: { id: user?.id },
        data: {
          temporaryAccessKey: "EMPTY",
        },
      });

      const isPasswordValid = user.password === password;

      if (isPasswordValid) {
        return { ...user };
      } else {
        throw new Error("Invalid credentials");
      }
    },
  },
};
