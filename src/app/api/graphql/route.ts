import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';
import { USERS } from './user-data';

interface GetUserArgs {
  id: string;
}

const resolvers = {
  Query: {
    users: () => USERS,
    user: (_, { id }: GetUserArgs) => USERS.find((user) => user.id === id),
  },
};

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    profilePictureVariant: Int!
    friends: [Friend!]!
  }

  type Friend {
    id: ID!
    name: String!
    profilePictureVariant: Int!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);
export { handler as GET, handler as POST };
