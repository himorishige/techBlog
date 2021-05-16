# テックブログ

このプロジェクトはJSON Serverを使いRedux Toolkitを用いてデータを表示するブログアプリケーションのソースコードになります。

[Reactを使ったテックブログを作成してみた](https://qiita.com/himorishige/items/7ebd87ddaf7c86901b9a)
[ReduxとRedux Toolkitについて(createAsyncThunkとcreateEntityAdapter推し)](https://qiita.com/himorishige/items/7ebd87ddaf7c86901b9a)

## 動作に必要な外部サービス

外部サービスとの連携はありません。
データの連携にはJSON Serverのセットアップが必要となります。

## 初期設定

動作に必要な設定について
`.env`

```bash:.env
SKIP_PREFLIGHT_CHECK=true // storybook用の記載
```

`.env.local`

```bash:.env.local
REACT_APP_JSON_SERVER_URL=http://localhost:3001 // JSON Serverの起動ポート
```

## 起動について

### yarn start

開発モードでアプリケーションを起動します。

### yarn storybook

Storybookを起動します。

### yarn test

jestを起動します。
