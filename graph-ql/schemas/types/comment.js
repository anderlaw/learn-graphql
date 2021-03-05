const { GraphQLNonNull, GraphQLInt, GraphQLObjectType, GraphQLString } = require("graphql")

/**
 * type Comment{
 *  id:Int!,
 * content:String
 * }
 */
module.exports = new GraphQLObjectType({
  name:"Comment",
  fields:()=>({
    id:{
      type: new GraphQLNonNull(GraphQLInt) 
    },
    content:{
      type:GraphQLString
    }
  })
})