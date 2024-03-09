import { sellProductResolver } from "../actions/sellProductsResolver";
import { restockingProductResolver } from "../actions/restockingProductsResolver";
import { writeoffProductResolver } from "../actions/writeoffProductsResolver";




const actionResolvers = {
  Query: {




  },

  Mutation: {

    ...sellProductResolver.Mutation,
    ...restockingProductResolver.Mutation,
    ...writeoffProductResolver.Mutation,

  },
};

export default actionResolvers;
