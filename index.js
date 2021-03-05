const express = require("express");
const app = express();
const graphQLHttpIns = require("./graph-ql")
app.use(
  "/graphql",
  graphQLHttpIns
);
// 静态资源设置
app.use(express.static("front-end/dist"));
app.listen(4000, () => {
  console.log("app is running at 4000 port!");
});
