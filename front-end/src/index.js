import { request, gql } from "graphql-request";

const query = gql`
query GetPerson($name: String!, $gender: String!,$age:Int!,$msg:String!){
  getPerson(name:$name,gender:$gender,age:$age){
    name,
    age,
    gender,
    sayHi(msg:$msg)
  }
  user(id:1){
    id,
    name,
    gender,
    friends{
      name,
      id
    }
  }
  getNews
}
`;

const mutation = gql`
mutation setMessage($input: String) {
  setNews(message: $input)

}
`
console.log(query);
request("/graphql", query,{
  name:"Andrew",
  gender:"male",
  age:20,
  msg:"Hello"
}).then((data) => console.log(data));
request("/graphql", mutation,{
  input:"拜登怒怼特朗普"
}).then((data) => console.log(data));
//1.获取所有的用户信息
