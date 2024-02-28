
import { activeProductsResolver } from "./queries/activeProducts"
import { addProductResolver } from "./mutations/addProduct";
import { deactivateProductResolver } from "./mutations/deactivateProduct";
import { deleteProductResolver } from "./mutations/deleteProduct";
import { editProductResolver } from "./mutations/editProduct";
import { inactiveProductsResolver } from "./queries/inactiveProductsResolver";
import { productResolver } from "./queries/productResolver";
import { productsResolver } from "./queries/productsResolver";

const productResolvers = {
  Query: {
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
