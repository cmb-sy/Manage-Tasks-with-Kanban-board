## requirements command

pip install -r requirements.txt
pip freeze > requirements.txt

## Vue.js の認証でやっていく手順

1. ログインリクエストを API に送る
2. API がトークン等の認証情報を返す
3. 受け取った情報を Vuex に保存する
4. パラメータの有無を判定し、無ければログインページなどにリダイレクトする

## 今後やること（minimum）

- カンバンの整理
- トークンの有無で強制ログアウト。でないと url いじるだけで移動し放題。
- html, css で見た目をかっこよくする。
- Docker の導入

# 将来的にやること

- ユーザ名の一意なものにする。
- リフレッシュトークンによるセッション管理
- 背景を変更できるようにすること
- カードを DB 保存

# メモ

### 1

reactive と ref では ref だけで使うのはよさそう。
https://qiita.com/Yametaro/items/2a37f18fb52f7565b2cb

### 2

const userData = ref({
username: "",
password: "",
});
このとき、userData.value=""ではオブジェクトを空文字にする。そのため、username が template 内で入力したとき見つからなくなりエラーがでる。

### 3

- <form>で送るとBroken pipe from が発生する。serializerの受け取り方に問題ありなので、使う場合は修正が必要
  formはパスワードやメールアドレスの入力に制限をかけることができるので、後々そういう実装に変えていきたい。

# 参考 URL

ログインフォームのブートストラップ
https://www.zealseeds.com/SysDevTech/bootstrap/howto/login-page/index.html
