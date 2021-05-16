# テックブログ

このプロジェクトはJSON Serverを使いRedux Toolkitを用いてデータを表示するブログアプリケーションのソースコードになります。

![スライド1](https://user-images.githubusercontent.com/71954454/118387059-ed52c780-b656-11eb-9b70-5dd6c304b624.png)
![スライド2](https://user-images.githubusercontent.com/71954454/118387063-f9d72000-b656-11eb-91f6-f79c4179f617.png)
![スライド3](https://user-images.githubusercontent.com/71954454/118387067-fe033d80-b656-11eb-9393-402d0d2ca7e8.png)

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

## yarn json-server

JSON Serverを起動します。  
http://localhost:3001/posts  
初期設定では2秒のディレイタイムを設定しています。

### yarn start

開発モードでアプリケーションを起動します。

#### 記事一覧ページ
http://localhost:3000

#### 管理画面
http://localhost:3000/admin
### yarn storybook

Storybookを起動します。

### yarn test

jestを起動します。
