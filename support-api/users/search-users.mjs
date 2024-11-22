/**
 * Search Users
 * https://developer.zendesk.com/api-reference/ticketing/users/users/#search-users
 */
import zendesk from 'node-zendesk';

console.log(process.env.API_TOKEN);

const client = zendesk.createClient({
  username: process.env.USERNAME,
  token: process.env.API_TOKEN,
  subdomain: process.env.SUBDOMAIN
});

const EXTERNAL_ID = 'xxx'
const users = await client.users.search({
  external_id: EXTERNAL_ID,
  // or
  // query: 'foo@example.com'
});

console.dir(users, {depth: null});
