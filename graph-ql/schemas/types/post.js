/**
 * 文章类型
 * type Post{
 *    id:Init!
 *    title:String
 *    content:String
 *    comments:[Comment!]!
 * }
 */
const { GraphQLNonNull, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql")
const commentType = require('./comment')
module.exports = new GraphQLObjectType({
  name:"Post",
  fields:()=>({
    id:{
      type:new GraphQLNonNull(GraphQLInt)
    },
    title:{
      type:GraphQLString
    },
    content:{
      type:GraphQLString
    },
    comments:{
      type:new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(commentType)))
    }
  })
})