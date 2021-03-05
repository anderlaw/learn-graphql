const { GraphQLNonNull, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql")

const userType = require('./user')
const {CharacterInterface} = require('../interface/character')
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
    allUsers:{
      type:new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CharacterInterface)))
    }
  })
})