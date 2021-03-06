const express = require('express');
const { ApolloServer,gql} = require('apollo-server-express');

const app = express();
const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];
const users = [
  {
    id:1,
    name:"Andrew",
    email:"9812@qq.com",
    friends:[2,3]
  },
  {
    id:2,
    name:"Hank",
    email:"123123123@qq.com",
    friends:[1,3,4]
  },
  {
    id:3,
    name:"Jerry",
    email:"123123123@qq.com",
    friends:[1,2,4]
  },
  {
    id:4,
    name:"Stephern",
    email:"123123123@qq.com",
    friends:[2,3]
  }
]
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Mutation{
    addBook(title:String,author:String):Book
  }
  enum AllowedColor {
    light
    dark
  }
  type Query {
    books: [Book]
    color(colorType:AllowedColor):String
    user(id:Int):User
  }
  """
  递归query
  """
  type User{
    id:Int,
    name:String,
    email:String,
    friends:[User]
  }
`;
const resolvers = {
  Query: {
    books: () => books,
    color:(_,{colorType}) => {
      console.log(colorType);
      //返回真实的颜色值
      return colorType
    },
    user:(_,{id})=>{
      return users.find(user=>user.id === id)
    }
  },
  Mutation:{
    addBook:(_,{title,author})=>{
      const newBook = {
        title,
        author
      }
      books.push(newBook);
      return newBook;
    }
  },
  AllowedColor:{
    light:"#ffffff",
    dark:"#e3e3e3",
  },
  User:{
    friends(parent){
      console.log(parent)
      return parent.friends.map(friendId=>users.find(user=>user.id === friendId))
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });
//配置静态资源目录
app.use("/static",express.static("./front-end/dist"))
app.use((req, res) => {
  res.status(200);
  res.send('Hello!');
  res.end();
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)