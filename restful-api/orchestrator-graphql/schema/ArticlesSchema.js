const { gql, ApolloError } = require("apollo-server");

module.exports = {
  typeDefs: gql`
    type Articles {
      _id: ID
      title: String
    }

    input ArticlesInput {
      title: String!
    }

    type ArticlesResult {
      movie: Articles
    }

    type Result {
      message: String
    }

    input idArticles {
      id: ID!
    }

    extend type Query {
      readAllArticles: [Articles]
      readArticlesById(input: idArticles): Articles
    }

    type Mutation {
      createArticles(input: ArticlesInput): ArticlesResult
      updateArticles(idUpdate: idArticles, input: ArticlesInput): Result
      deleteArticles(input: idArticles): Result
    }
  `,
  resolvers: {
    Query: {
      async readAllArticles() {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
      async readArticlesById(parent, args, context, info) {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
    },
    Mutation: {
      async createArticles(parent, args, context, info) {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
      async updateArticles(parent, args, context, info) {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
      async deleteArticles(parent, args, context, info) {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
    },
  },
};
