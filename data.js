const users = [
  {
    id: 1,
    name: "Tom",
    gender: "male",
  },
  {
    id: 2,
    name: "Jerry",
    gender: "female",
  },
  {
    id: 3,
    name: "Hank",
    gender: "male",
  },
  {
    id: 4,
    name: "Andrew",
    gender: "male",
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
};
