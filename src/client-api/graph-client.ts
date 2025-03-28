import { ApolloClient, InMemoryCache } from '@apollo/client';

const GRAPHQL_URL = 'http://localhost:3000/api/graphql';

export const createGraphClient = () => new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
});
