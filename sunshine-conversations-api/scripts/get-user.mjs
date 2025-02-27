import SunshineConversationsClient from 'sunshine-conversations-client';
const defaultClient = SunshineConversationsClient.ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = process.env.KEY_ID;
basicAuth.password = process.env.SECRET;

// Uncomment this section to use JWTs instead
// var bearerAuth = defaultClient.authentications['bearerAuth'];
// bearerAuth.accessToken = 'YOUR_ACCESS_TOKEN';

const apiInstance = new SunshineConversationsClient.UsersApi();
const appId = process.env.APP_ID;

const userIdOrExternalId = process.env.EXTERNAL_ID;

// get user
const user = await apiInstance.getUser(appId, userIdOrExternalId);
console.log('API called successfully. Returned data: ');
console.dir(user, {depth: null});
