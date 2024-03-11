
import { authenticateUserResolver } from "./queries/authenticateUserResolver"
import { userResolver } from "./queries/userResolver"
import { usersResolver } from "./queries/usersResolver"


import { addUserResolver } from "./mutations/addUserResolver";
import { deleteUserResolver } from "./mutations/deleteUserResolver";
import { deactivateUserResolver } from "./mutations/deactivateUserResolver";
import { editUserResolver } from "./mutations/editUserResolver";
import { firstTimeResetUserResolver } from "./mutations/firstTimeResetUserResolver";





const productResolvers = {
  Query: {

    ...userResolver.Query,
    ...usersResolver.Query,
    ...authenticateUserResolver.Query,



  },

  Mutation: {
    ...addUserResolver.Mutation,
    ...deleteUserResolver.Mutation,
    ...editUserResolver.Mutation,
    ...deactivateUserResolver.Mutation,
    ...firstTimeResetUserResolver.Mutation,


  },
};

export default productResolvers;
