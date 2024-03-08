
import { restockingResolver } from "./queries/restockingResolver";
import { restockingsResolver } from "./queries/restockingsResolver";






const typeDefsRestockings = {
  Query: {
    ...restockingResolver.Query,
    ...restockingsResolver.Query,




  },

  Mutation: {
    // ...addRestockingResolver.Mutation,


  },
};

export default typeDefsRestockings;
