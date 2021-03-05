const { GraphQLNonNull, GraphQLInt, GraphQLInterfaceType, GraphQLString, GraphQLList } = require("graphql")

/**
 * 接口->角色(应该必须有的是 id,name,friends,posts则不一定有)
 * interface Character {
 *   id: Int!
 *   name: String
 *   friends: [Character!]!
 * }
 */
const userType = require('../types/user')
const CharacterInterface = new GraphQLInterfaceType({
  name: 'Character',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the character.',
    },
    name: {
      type: GraphQLString,
      description: 'The name of the character.',
    },
    friends: {
      type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(CharacterInterface))),
      description:'The friends of the character, or an empty list if they have none.',
    }
  }),
  resolveType(character) {
    return userType.name;
  }
});
module.exports.CharacterInterface = CharacterInterface