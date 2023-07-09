const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema/type-defs");
const resolvers = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const start = async () => {
  try {
    const { url } = await server.listen();
    console.log(`SERVER LISTENING AT: ${url}... :)`);
  } catch (err) {
    console.log(err);
  }
};

start();
