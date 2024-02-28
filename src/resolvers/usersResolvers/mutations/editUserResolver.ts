import { PrismaClient, UserRole } from "../../../../prisma/generated/usersClient";
import { getDynamicDatabaseUrl } from "../../../components/database/GetynamicDatabaseUrl";

export const editUserResolver = {
    Mutation: {
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
  },
};
