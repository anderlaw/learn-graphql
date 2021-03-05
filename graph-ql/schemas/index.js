const { GraphQLSchema } = require("graphql");
const {
  userType,
  commentType,
  postType,
  queryType
} = require('./types')
//导出schema
module.exports = new GraphQLSchema({
  query: queryType,
  types: [userType, postType,commentType],
});