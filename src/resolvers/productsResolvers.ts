
import { activeProductsResolver } from "../resolvers/products/queries/activeProducts"
import { addProductResolver } from "./products/mutations/addProduct";
import { deactivateProductResolver } from "./products/mutations/deactivateProduct";
import { deleteProductResolver } from "./products/mutations/deleteProduct";
import { editProductResolver } from "./products/mutations/editProduct";
import { inactiveProductsResolver } from "./products/queries/inactiveProductsResolver";
import { productResolver } from "./products/queries/productResolver";
import { productsResolver } from "./products/queries/productsResolver";

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
