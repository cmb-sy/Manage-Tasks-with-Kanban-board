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

- リフレッシュトークンによるセッション管理
- 背景を変更できるようにすること
- カードを DB 保存

# 参考 URL

ログインフォームのブートストラップ
https://www.zealseeds.com/SysDevTech/bootstrap/howto/login-page/index.html
