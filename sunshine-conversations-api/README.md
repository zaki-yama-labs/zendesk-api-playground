# Zendesk の Sunshine Conversations API サンプル

## 手順

`https://<your-zendesk-subdomain>.zendesk.com/admin/apps-integrations/apis/conversations-api/`

から Conversations API 用の API キーを作成し、

- アプリ ID: `APP_ID`
- キー ID: `KEY_ID`
- シークレットキー: `SECRET`

をそれぞれ `.env` に記述する。

また、取得したい User の user id または external id を取得する。

```
$ node --env-file=.env scripts/***.mjs
```

を実行する。


## 参考リンク

- [ZendeskのユーザーとSunshine Conversationsのユーザーの違いは何ですか？ – Zendeskヘルプ](https://support.zendesk.com/hc/ja/articles/5851837582490-Zendesk%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%A8Sunshine-Conversations%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E3%81%AE%E9%81%95%E3%81%84%E3%81%AF%E4%BD%95%E3%81%A7%E3%81%99%E3%81%8B)
- [Conversations APIキーの使用 – Zendeskヘルプ](https://support.zendesk.com/hc/ja/articles/4576088682266-Conversations-API%E3%82%AD%E3%83%BC%E3%81%AE%E4%BD%BF%E7%94%A8)
- [Sunshine Conversations Docs | API Quickstart](https://docs.smooch.io/guide/api-quickstart/#api-quickstart)
- [Sunshine Conversations Docs | Overview](https://docs.smooch.io/guide/authentication-overview/)
  - 認証周りの話
