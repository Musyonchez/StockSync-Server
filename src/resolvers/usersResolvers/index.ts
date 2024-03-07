
import { authenticateUserResolver } from "./queries/authenticateUserResolver"
import { userResolver } from "./queries/userResolver"
import { usersResolver } from "./queries/usersResolver"


import { addUserResolver } from "./mutations/addUserResolver";
import { deleteUserResolver } from "./mutations/deleteUserResolver";
import { editUserResolver } from "./mutations/editUserResolver";





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


  },
};

export default productResolvers;
