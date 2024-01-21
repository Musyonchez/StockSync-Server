import { UserRole } from "../../prisma/generated/usersClient";
declare const usersResolvers: {
    Query: {
        users: (_: any, { company, type }: {
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            firstName: string | null;
            lastName: string | null;
            age: number | null;
            email: string | null;
            password: string | null;
            store1: boolean;
            store2: boolean;
            store3: boolean;
            store4: boolean;
            company: string | null;
            role: import("../../prisma/generated/usersClient").$Enums.UserRole;
        }[]>;
        user: (_: any, { id, company, type }: {
            id: string;
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            firstName: string | null;
            lastName: string | null;
            age: number | null;
            email: string | null;
            password: string | null;
            store1: boolean;
            store2: boolean;
            store3: boolean;
            store4: boolean;
            company: string | null;
            role: import("../../prisma/generated/usersClient").$Enums.UserRole;
        } | null>;
        authenticateUser: (_: any, { email, password, company, }: {
            email: string;
            password: string;
            company: string;
        }) => Promise<{
            company: string;
            id: string;
            role: import("../../prisma/generated/usersClient").$Enums.UserRole;
            email: string | null;
            firstName: string | null;
            lastName: string | null;
            age: number | null;
            store1: boolean;
            store2: boolean;
            store3: boolean;
            store4: boolean;
            password: string | null;
        }>;
    };
    Mutation: {
        addUser: (_: any, args: {
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
        }) => Promise<{
            id: string;
            firstName: string | null;
            lastName: string | null;
            age: number | null;
            email: string | null;
            password: string | null;
            store1: boolean;
            store2: boolean;
            store3: boolean;
            store4: boolean;
            company: string | null;
            role: import("../../prisma/generated/usersClient").$Enums.UserRole;
        }>;
        editUser: (_: any, args: {
            id: string;
            firstName?: string | undefined;
            lastName?: string | undefined;
            age?: number | undefined;
            email?: string | undefined;
            password?: string | undefined;
            store1?: boolean | undefined;
            store2?: boolean | undefined;
            store3?: boolean | undefined;
            store4?: boolean | undefined;
            role?: import("../../prisma/generated/usersClient").$Enums.UserRole | undefined;
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            firstName: string | null;
            lastName: string | null;
            age: number | null;
            email: string | null;
            password: string | null;
            store1: boolean;
            store2: boolean;
            store3: boolean;
            store4: boolean;
            company: string | null;
            role: import("../../prisma/generated/usersClient").$Enums.UserRole;
        }>;
        deleteUser: (_: any, { id, company, type }: {
            id: string;
            company: string;
            type: string;
        }) => Promise<{
            id: string;
            firstName: string | null;
            lastName: string | null;
            age: number | null;
            email: string | null;
            password: string | null;
            store1: boolean;
            store2: boolean;
            store3: boolean;
            store4: boolean;
            company: string | null;
            role: import("../../prisma/generated/usersClient").$Enums.UserRole;
        }>;
    };
};
export default usersResolvers;
