const { gql, ApolloError } = require("apollo-server");

module.exports = {
  typeDefs: gql`
    type Comments {
      _id: ID
      title: String
    }

    input CommentsInput {
      title: String!
    }

    type CommentsResult {
      movie: Comments
    }

    type Result {
      message: String
    }

    input idComments {
      id: ID!
    }

    extend type Query {
      readAllComments: [Comments]
      readCommentById(input: idComments): Comments
    }

    type Mutation {
      createComments(input: CommentsInput): CommentsResult
      updateComments(idUpdate: idComments, input: CommentsInput): Result
      deleteComments(input: idComments): Result
    }
  `,
  resolvers: {
    Query: {
      async readAllComments() {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
      async readCommentById(parent, args, context, info) {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
    },
    Mutation: {
      async createComments(parent, args, context, info) {
        try {
        } catch (err) {
          return new ApolloError(err);
        }
      },
      async updateComments(parent, args, context, info) {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
      async deleteComments(parent, args, context, info) {
        try {
        } catch (err) {
          console.log(err);
          return new ApolloError(err);
        }
      },
    },
  },
};
