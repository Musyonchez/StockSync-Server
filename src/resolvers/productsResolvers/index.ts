import { activeProductsResolver } from "./queries/activeProductsResolver";
import { addProductResolver } from "./mutations/addProductResolver";
import { deactivateProductResolver } from "./mutations/deactivateProductResolver";
import { deleteProductResolver } from "./mutations/deleteProductResolver";
import { editProductResolver } from "./mutations/editProductResolver";
import { inactiveProductsResolver } from "./queries/inactiveProductsResolver";
import { productResolver } from "./queries/productResolver";
import { productsResolver } from "./queries/productsResolver";
import { searchProductsResolver } from "./queries/searchProductsResolver";

// Combine all resolvers into a single object
const productResolvers = {
  Query: {
    // Merge query resolvers
    ...searchProductsResolver.Query,
    ...productsResolver.Query,
    ...activeProductsResolver.Query,
    ...inactiveProductsResolver.Query,
    ...productResolver.Query,
  },

  Mutation: {
    // Merge mutation resolvers
    ...addProductResolver.Mutation,
    ...editProductResolver.Mutation,
    ...deactivateProductResolver.Mutation,
    ...deleteProductResolver.Mutation,
  },
};

export default productResolvers;
