import zendesk from 'node-zendesk';

console.log(process.env.API_TOKEN);

const client = zendesk.createClient({
  username: process.env.USERNAME,
  token: process.env.API_TOKEN,
  subdomain: process.env.SUBDOMAIN
});

const tickets = await client.tickets.list();

console.dir(tickets[0], {depth: null});
