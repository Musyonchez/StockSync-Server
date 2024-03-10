import { PrismaClient, UserRole } from "../../../../prisma/generated/usersClient";

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
            console.log("authenticateUser resolver starting", email);

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
            } | null;
      
            if (!user) {
              throw new Error("User not found");
            }
      
            const isPasswordValid = user.password === password;
      
            if (isPasswordValid) {
              return { ...user };
            } else {
              throw new Error("Invalid credentials");
            }
          },
  },
};
