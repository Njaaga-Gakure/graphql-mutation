const { userList, movieList } = require("../db");
const _ = require("lodash");
const resolvers = {
  Query: {
    // user resolver
    users: () => {
      return userList;
    },
    user: (parent, args) => {
      const id = Number(args.id);
      return _.find(userList, { id });
    },

    // movie resolvers
    movies: () => {
      return movieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      console.log(name);
      console.log(typeof name);
      console.log(_.find(movieList, { name }));
      return _.find(movieList, { name });
    },
  },
  User: {
    favouriteMovies: () => {
      return _.filter(
        movieList,
        (movie) =>
          movie.yearOfPublication >= 1990 && movie.yearOfPublication <= 2000
      );
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const user = args.input;
      user.id = userList[userList.length - 1].id + 1;
      userList.push(user);
      return user;
    },
    updateUserName: (parent, args) => {
      const { id, newUserName } = args.input;
      const user = _.find(userList, { id: Number(id) });
      user.username = newUserName;
      return user;
    },
    deleteUser: (parent, args) => {
      let deletedUser = {};
      _.remove(userList, (user) => {
        if (user.id === Number(args.id)) {
          deletedUser = user;
        }
        return user.id === Number(args.id);
      });
      console.log(userList);
      return deletedUser;
    },
  },
};

module.exports = resolvers;
