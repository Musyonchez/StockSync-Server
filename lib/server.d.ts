declare const express: any;
declare const ApolloServer: any;
declare const userResolvers: any;
declare const typeDefsUsers: any;
declare const productsResolvers: any;
declare const typeDefsProducts: any;
declare const ExpressRequest: any, ExpressResponse: any;
interface MyContext {
    req: Request;
    res: Response;
}
declare const app: any;
declare const server: any;
declare const port: string | number;
declare function startServer(): Promise<void>;
