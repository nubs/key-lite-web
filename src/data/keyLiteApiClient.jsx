import { GraphQLClient } from 'graphql-request';

const keyLiteApiClient = new GraphQLClient(
  import.meta.env.VITE_KEY_LITE_API_URL,
);

export default keyLiteApiClient;
