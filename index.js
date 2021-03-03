const { users, posts, comments } = require("./data");
const express = require("express");
const app = express();
const {
  buildSchema,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
} = require("graphql");

//声明变量以便修改它
let news = "特朗普发表重要讲话"

const { graphqlHTTP } = require("express-graphql");
const buildedSchema = buildSchema(`
  type Person {
    name:String!
    gender: String!
    age: Int!
    sayHi(msg:String!): String
  }
  type User{
    id:Int,
    name:String,
    gender:String,
    friends:[User]
  }
  type Query {
    getPerson(name: String,gender:String,age:Int): Person
    getNews:String
    user(id:Int):User
  }
  type Mutation {
    setNews(message: String): String
  }
  
`)
class Person{
  constructor(name,gender,age){
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  sayHi({msg}){
    return `${msg},my name is ${this.name}`
  }
}
app.use(
  "/graphql",
  graphqlHTTP({
    schema:buildedSchema,
    rootValue: {
      getPerson: ({name,gender,age}) => new Person(name,gender,age),
      user:({id})=>{
        console.log(id)
        const tempUser = users.find(user=>user.id === id)
        const {friends,...userPlainVals} = tempUser

        const finalUser = {...userPlainVals,friends:friends.map(id=>users.find(user=>user.id === id))};
        console.log(JSON.stringify(finalUser));
        return finalUser
      },
      getMessage: () => {
        return news;
      },
      setNews: ({message}) => {
        console.log(message)
        news = message;
        return news;
      }
    },
    graphiql: true,
  }),
);
// 静态资源设置
app.use(express.static("front-end/dist"));
app.listen(4000, () => {
  console.log("app is running at 4000 port!");
});
