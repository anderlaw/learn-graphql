import { request, gql } from 'graphql-request'

const query = gql`
  {
    user(id:2){
      name,
      posts{
        id,
        title
      }
    },
    users{
      id,
      gender
    }
  }
`
console.log(query);
request('/graphql', query).then((data) => console.log(data))
//1.获取所有的用户信息
