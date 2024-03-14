// Importing resolver functions for selling, restocking, and write-off actions
import { sellProductResolver } from "../actions/sellProductsResolver";
import { restockingProductResolver } from "../actions/restockingProductsResolver";
import { writeoffProductResolver } from "../actions/writeoffProductsResolver";

// Combining resolver functions for different actions into a single resolver object
const actionResolvers = {
  Query: {}, // No query resolvers defined in this object

  Mutation: {
    // Spread operator (...) is used to include resolver functions from respective action resolvers
    ...sellProductResolver.Mutation, // Include mutation resolver for selling products
    ...restockingProductResolver.Mutation, // Include mutation resolver for restocking products
    ...writeoffProductResolver.Mutation, // Include mutation resolver for writing off products
  },
};

export default actionResolvers;
