const { GraphQLNonNull, GraphQLInt, GraphQLObjectType, GraphQLString } = require("graphql")

const userType = require('./user')

/**
 * type Query{
 *  user(id:Int):User
 * }
 */
module.exports = new GraphQLObjectType({
  name:"Query",
  fields:()=>({
    user:{
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt),
          description: 'id of the user',
        },
      }
    },
  })
})