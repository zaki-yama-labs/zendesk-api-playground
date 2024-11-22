/**
 * User の External ID を更新する
 * NOTE: SupportユーザーだけでなくSunshine Conversationsユーザーの External ID も更新する必要がある
 */
import zendesk from 'node-zendesk';

console.log(process.env.API_TOKEN);

const USER_ID = 1;
const NEW_EXTERNAL_ID = 'xxxxxxx'

const client = zendesk.createClient({
  username: process.env.USERNAME,
  token: process.env.API_TOKEN,
  subdomain: process.env.SUBDOMAIN
});

const user = await client.users.update(USER_ID, {
  user: {
    external_id: NEW_EXTERNAL_ID
  }
});

console.dir(user.result, {depth: null});
