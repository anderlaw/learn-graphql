const users = [
  {
    id: 1,
    name: "Tom",
    gender: "male",
    friends:[2,3,4]
  },
  {
    id: 2,
    name: "Jerry",
    gender: "female",
    friends:[1,3]
  },
  {
    id: 3,
    name: "Hank",
    gender: "male",
    friends:[1,2]
  },
  {
    id: 4,
    name: "Andrew",
    gender: "male",
    friends:[1]
  },
];
const posts = [
  {
    id: 1,
    title: "经济内循环，大的机遇即将来临！",
    content: "扯淡而已",
    author_id: 2,
  },
  {
    id: 2,
    title: "哎哟，官人",
    content: "扯淡而已",
    author_id: 4,
  },
  {
    id: 3,
    title: "中国梦",
    content: "扯淡而已",
    author_id: 1,
  },
  {
    id: 4,
    title: "中美贸易战",
    content: "扯淡而已",
    author_id: 3,
  },
  {
    id: 5,
    title: "中东问题",
    content: "扯淡而已",
    author_id: 2,
  },
];
const comments = [
  {
    id: 1,
    post_id: 2,
    content: "非常好",
  },
  {
    id: 2,
    post_id: 4,
    content: "非常棒",
  },
  {
    id: 3,
    post_id: 1,
    content: "这是一个非常差劲的文章",
  },
  {
    id: 4,
    post_id: 5,
    content: "这个作者写的什么玩意?",
  },
  {
    id: 5,
    post_id: 5,
    content: "中东关你毛事呢?",
  },
  {
    id: 6,
    post_id: 4,
    content: "中美贸易战严重影响了国内经济",
  },
];
module.exports = {
  users,
  posts,
  comments,
  getFriends(id){
    return users.find(user=>user.id === id).friends.map(friendId=>users.find(user=>user.id === friendId))
  },
  getPosts(){

  },
  getUser(id){
    const user = users.find(user=>user.id === id);
    return user ?? {
      id:-1,
      name:"default",
      gender:"middle"
    } 
  }
};
/**
 * 根据id请求用户信息(发表的文章，)
 * 没有参数则返回所有的用户
 * user {
 *  id
 * name
 * gender
 * friends:[User]
 * posts:[Post]
 * }
 * type User{
 *  id,
 * name
 * gender
 * friends:[User]
 * 
 * }
 * type Post{
 *  id,
 *  title,
 *  content,
 *  comments:[]
 * }
 * type Comment{
 *  id,
 *  content
 * }
 */
