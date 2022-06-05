const { Mutation } = require('./Mutation');
const { Query } = require('./Query');
const { User } = require('./User');

exports.resolvers = {
  Query,
  Mutation,
  User,
};
