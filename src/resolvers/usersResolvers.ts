import { PrismaClient, UserRole } from "../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../components/database/GetynamicDatabaseUrl";

const usersResolvers = {
  Query: {
    users: async (
      _: any,
      { company, type }: { company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
      const prisma = new PrismaClient();

      return await prisma.users.findMany();
    },

    user: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;
      const prisma = new PrismaClient();

      return await prisma.users.findUnique({
        where: {
          id,
        },
      });
    },

    authenticateUser: async (
      _: any,
      {
        email,
        password,
        company,
      }: { email: string; password: string; company: string }
    ) => {
      // const type = "users";
      // const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      // process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      // Use type assertion to tell TypeScript that you know the type of user
      const user = (await prisma.users.findFirst({
        where: { email: email },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          age: true,
          email: true,
          password: true,
          store1: true,
          store2: true,
          store3: true,
          store4: true,
          company: true,
          role: true,
        },
      })) as {
        id: string;
        firstName?: string;
        lastName?: string;
        age?: number;
        email?: string;
        password?: string;
        store1?: boolean;
        store2?: boolean;
        store3?: boolean;
        store4?: boolean;
        company?: string;
        role?: UserRole;
      } | null;

      if (!user) {
        throw new Error("User not found");
      }

      const isPasswordValid = user.password === password;

      if (isPasswordValid) {
        return { ...user, company };
      } else {
        throw new Error("Invalid credentials");
      }
    },
  },

  Mutation: {
    addUser: async (
      _: any,
      args: {
        firstName: string;
        lastName: string;
        age: number;
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

      // Include the company field in the user data
      const userWithCompany = { ...userData, company };

      return await prisma.users.create({ data: userWithCompany });
    },

    editUser: async (
      _: any,
      args: {
        id: string;
        firstName?: string;
        lastName?: string;
        age?: number;
        email?: string;
        password?: string;
        store1?: boolean;
        store2?: boolean;
        store3?: boolean;
        store4?: boolean;
        role?: UserRole;
        company: string;
        type: string;
      }
    ) => {
      const { company, type } = args;

      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const existingUser = await prisma.users.findUnique({
          where: {
            id: args.id,
          },
        });

        if (!existingUser) {
          throw new Error(`User with id ${args.id} not found`);
        }

        const updatedUser = await prisma.users.update({
          where: { id: args.id },
          data: {
            firstName: args.firstName ?? existingUser.firstName,
            lastName: args.lastName ?? existingUser.lastName,
            age: args.age ?? existingUser.age,
            email: args.email ?? existingUser.email,
            password: args.password ?? existingUser.password,
            store1: args.store1 ?? existingUser.store1,
            store2: args.store2 ?? existingUser.store2,
            store3: args.store3 ?? existingUser.store3,
            store4: args.store4 ?? existingUser.store4,
            role: args.role ?? existingUser.role,
          },
        });

        return updatedUser;
      } catch (error) {
        throw new Error(`Error updating user: ${(error as Error).message}`);
      }
    },

    deleteUser: async (
      _: any,
      { id, company, type }: { id: string; company: string; type: string }
    ) => {
      const dynamicDatabaseUrl = await getDynamicDatabaseUrl(company, type);

      process.env.STOCKSYNC_USERS = dynamicDatabaseUrl;

      const prisma = new PrismaClient();

      try {
        const currentUser = await prisma.users.findUnique({
          where: { id },
        });

        if (!currentUser) {
          throw new Error(`User with ID ${id} not found`);
        }

        const deletedUser = await prisma.users.delete({
          where: { id },
        });

        return deletedUser;
      } catch (error) {
        throw new Error(`Error deleting user: ${(error as Error).message}`);
      }
    },
  },
};

export default usersResolvers;
