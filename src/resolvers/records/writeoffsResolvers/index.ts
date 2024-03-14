import { writeoffResolver } from "./queries/writeoffResolver";
import { writeoffsResolver } from "./queries/writeoffsResolver";

// Merge the query resolvers for writeoff and writeoffs
const typeDefsWriteoffs = {
  Query: {
    ...writeoffResolver.Query,
    ...writeoffsResolver.Query,
  },
  Mutation: {
    // No mutation resolvers yet
  },
};

export default typeDefsWriteoffs;
