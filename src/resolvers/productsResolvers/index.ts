
import { activeProductsResolver } from "./queries/activeProductsResolver"
import { addProductResolver } from "./mutations/addProductResolver";
import { deactivateProductResolver } from "./mutations/deactivateProductResolver";
import { deleteProductResolver } from "./mutations/deleteProductResolver";
import { editProductResolver } from "./mutations/editProductResolver";
import { inactiveProductsResolver } from "./queries/inactiveProductsResolver";
import { productResolver } from "./queries/productResolver";
import { productsResolver } from "./queries/productsResolver";
import { searchProductsResolver } from "./queries/searchResolver";




const productResolvers = {
  Query: {
    ...searchProductsResolver.Query,
    ...productsResolver.Query,
    ...activeProductsResolver.Query,
    ...inactiveProductsResolver.Query,
    ...productResolver.Query,



  },

  Mutation: {
    ...addProductResolver.Mutation,
    ...editProductResolver.Mutation,
    ...deactivateProductResolver.Mutation,
    ...deleteProductResolver.Mutation,

  },
};

export default productResolvers;
