Support（Ticketing）APIのサンプル
===

https://developer.zendesk.com/api-reference/ticketing/introduction/

```bash
# .envに認証情報を記載したうえで
$ node --env-file=.env main.mjs
```


必要な認証情報

- `USERNAME`: ユーザー名
- `API_TOKEN`: Zendesk API 管理画面（ https://xxx.zendesk.com/admin/apps-integrations/apis/zendesk-api/settings/tokens/ ) で発行
- `SUBDOMAIN`: サブドメイン
