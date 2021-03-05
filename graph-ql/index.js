const { graphqlHTTP } = require("express-graphql");
const schema = require("./schemas")
const rootResolver = require('./resolver')
module.exports = graphqlHTTP({
  schema,
  rootValue:rootResolver,
  graphiql: true
})