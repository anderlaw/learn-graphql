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
    email:"9812@qq.com"
  },
  {
    id:2,
    name:"Hank",
    email:"123123123@qq.com"
  }
]
const typeDefs = gql`
  type Book {
    "this is a single line string literal"
    title: String
    """
    this is multiple line string literal
    """
    author: String
  }
  type Query {
    books: [Book]
    color(colorType:AllowedColor):String
    user(id:Int!):User
  }
  type Mutation{
    addBook(title:String,author:String):Book
  }
  type User{
    id:Int!
    name:String!
    email:String!
  }
  enum AllowedColor {
    light
    dark
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