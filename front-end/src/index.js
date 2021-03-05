import { request, gql } from "graphql-request";
const queryUser = gql`
  query queryUser($id:Int!){
    user(id:$id){
      id,
      name,
      gender
    }
  }
`
//注意，只有输入的参数需要指定类型（server、front-end双方指定、前端输入），（可以是built-in也可以是自定义类型），返回值类型则不需要
//因为返回值类型是在server端指定和处理的。
request("/graphql", queryUser,{
  id:3
}).then((data) => console.log(data));

//mutation
// const mutation = gql`
// mutation setMessage($input: String) {
//   setNews(message: $input)
// }
// `
// request("/graphql", mutation,{
//   input:"拜登怒怼特朗普"
// }).then((data) => console.log(data));
