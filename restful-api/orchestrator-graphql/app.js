const { ApolloServer, gql } = require("apollo-server");
const ArticlesSchema = require("./schema/ArticlesSchema");
const CommentsSchema = require("./schema/CommentsSchema");

const typeDefs = gql`
  type Query {
    message: String
  }
`;

const resolvers = {
  Query: {
    message() {
      return "Hello test GraphQL";
    },
  },
};

const server = new ApolloServer({
  typeDefs: [typeDefs, ArticlesSchema.typeDefs, CommentsSchema.typeDefs],
  resolvers: [resolvers, ArticlesSchema.resolvers, CommentsSchema.resolvers],
});

server
  .listen()
  .then(({ url }) => console.log(`Apollo has running on port ${url}`));
