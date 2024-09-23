import { createClient } from 'contentful';
import { listEnv } from 'swiftenv';

const {space, accessToken} = listEnv();

const client = createClient({
  space: space,
  accessToken: accessToken
});

export default client;