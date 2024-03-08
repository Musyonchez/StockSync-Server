
import { writeoffResolver } from "./queries/writeoffResolver";
import { writeoffsResolver } from "./queries/writeoffsResolver";






const typeDefsWriteoffs = {
  Query: {
    ...writeoffResolver.Query,
    ...writeoffsResolver.Query,




  },

  Mutation: {
    // ...addWriteoffResolver.Mutation,


  },
};

export default typeDefsWriteoffs;
