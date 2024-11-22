import zendesk from 'node-zendesk';

console.log(process.env.API_TOKEN);

const USER_ID = 1;

const client = zendesk.createClient({
  username: process.env.USERNAME,
  token: process.env.API_TOKEN,
  subdomain: process.env.SUBDOMAIN
});

const user = await client.users.show(USER_ID);

console.dir(user.result, {depth: null});
