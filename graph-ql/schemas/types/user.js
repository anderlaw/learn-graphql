/**
 * 用户类型
 * type User:Character{
 *  id:Int!
 *  name:String,
 *  gender:Gender,
 *  friends:[Character],
 *  post:[Post]
 * }
 */
const { GraphQLNonNull, GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql")
const { GenderEnum } = require('../enum/gender')
const postType = require('./post')
const { CharacterInterface } = require('../interface/character')
const {getFriends} = require('../../data')
module.exports = new GraphQLObjectType({
  name:"User",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the user.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the user.',
    },
    gender: {
      type: GenderEnum,
      description: 'The gender of the user.',
    },
    friends: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CharacterInterface))),
      description:'The friends of the human, or an empty list if they have none.',
      resolve: (human) => {
        const id = human.id;
        return getFriends(id)
      },
    },
    posts: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(postType))),
      description:
        'The friends of the human, or an empty list if they have none.',
      resolve: (human) => getPosts(human),
    },
  }),
  interfaces: [CharacterInterface],
})