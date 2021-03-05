const {users} = require('../data')
//root resolver
module.exports = {
  user: ({ id }) => {
    const tempUser = users.find((user) => user.id === id);
    const { friends, ...userPlainVals } = tempUser;
    
    const finalUser = {
      ...userPlainVals,
      friends: friends.map((id) => {
        const curUser = users.find((user) => user.id === id);
        const { friends, ...userPlainVals } = curUser;
        return Object.assign({
          friends:friends.map((id) => {
            const curUser = users.find((user) => user.id === id);
            return curUser;
          })
        },userPlainVals)
      }),
    };
    console.log(JSON.stringify(finalUser));
    finalUser.posts = [];
    console.log(finalUser);
    return finalUser;
  }
}