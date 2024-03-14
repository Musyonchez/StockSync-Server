import { authenticateUserResolver } from "./queries/authenticateUserResolver";
import { userResolver } from "./queries/userResolver";
import { usersResolver } from "./queries/usersResolver";
import { addUserResolver } from "./mutations/addUserResolver";
import { deleteUserResolver } from "./mutations/deleteUserResolver";
import { deactivateUserResolver } from "./mutations/deactivateUserResolver";
import { editUserResolver } from "./mutations/editUserResolver";
import { firstTimeResetUserResolver } from "./mutations/firstTimeResetUserResolver";
import { sendPasswordRecoveryEmailUserResolver } from "./mutations/sendPasswordRecoveryEmailUserResolver";
import { updateNewPasswordRecoveryUserResolver } from "./mutations/updateNewPasswordRecoveryUserResolver";

// Consolidating all resolvers into one object
const productResolvers = {
  Query: {
    // Include resolver functions for queries
    ...userResolver.Query,
    ...usersResolver.Query,
    ...authenticateUserResolver.Query,
  },
  Mutation: {
    // Include resolver functions for mutations
    ...addUserResolver.Mutation,
    ...deleteUserResolver.Mutation,
    ...editUserResolver.Mutation,
    ...deactivateUserResolver.Mutation,
    ...firstTimeResetUserResolver.Mutation,
    ...sendPasswordRecoveryEmailUserResolver.Mutation,
    ...updateNewPasswordRecoveryUserResolver.Mutation,
  },
};

export default productResolvers;
