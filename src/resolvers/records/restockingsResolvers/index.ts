
import { restockingResolver } from "./queries/restockingResolver";
import { restockingsResolver } from "./queries/restockingsResolver";






const typeDefsRestockings = {
  Query: {
    ...restockingResolver.Query,
    ...restockingsResolver.Query,




  },

  Mutation: {


  },
};

export default typeDefsRestockings;
