const { GraphQLEnumType } = require("graphql");

/**
 * 性别枚举
 * enum GenderEnum { MALE, FEMALE, MIDDLE }
 */
module.exports.GenderEnum = new GraphQLEnumType({
  name: 'GenderEnum',
  values: {
    MALE: {
      value: "male"
    },
    FEMALE: {
      value: "female"
    },
    MIDDLE: {
      value: "middle"
    }
  }
});