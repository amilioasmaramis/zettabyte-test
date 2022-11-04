const { ApolloServer, gql } = require("apollo-server");

server
  .listen()
  .then(({ url }) => console.log(`Apollo has running on port ${url}`));
