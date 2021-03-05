const commentType = require('./comment')
const postType = require('./post')
const userType = require('./user')
const queryType = require('./query')

console.log(JSON.stringify(queryType))
console.log(postType)
//导出所有的type
module.exports = {
  commentType,
  postType,
  userType , 
  queryType,
}
