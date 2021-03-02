
const { users,posts,comments} = require('./data')
  const express = require('express')
const app = express();
const {buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLID
} = require('graphql')
const {graphqlHTTP} = require('express-graphql')

const postType = new GraphQLObjectType({
  name:"Post",
  fields:{
    id:{type:GraphQLID},
    title:{type:GraphQLString},
    content:{type:GraphQLString}
  }
})
const userType = new GraphQLObjectType({
  name: 'User',
  fields: {
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      gender: { type: GraphQLString },
      posts:{type:new GraphQLList(postType)}
  }
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      user:{
        type:new GraphQLNonNull(userType),
        args:{
          id:{
            type:GraphQLInt
          }
        },
        resolve: function (source, args) {
          const id = args.id
          const res_posts = posts.filter(item=>item.author_id === id)
          console.log(id,res_posts)
          return Object.assign({posts:res_posts},users.find(item=>item.id === id))
        }
      },
      users:{
        type:new GraphQLList(userType),
        resolve: function (source, args) {
          console.log(args)
          return users
        }
      }
    }
  }),
  types:[userType]
});
app.use('/graphql',graphqlHTTP({
  schema,
  rootValue:{
    hello:()=>"hello,world!"
  },
  graphiql:true
}))
// 静态资源设置
app.use(express.static('front-end/dist'))

app.listen(4000,()=>{
  console.log('app is running at 4000 port!');
})