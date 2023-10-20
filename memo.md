## requirements command

pip install -r requirements.txt
pip freeze > requirements.txt

## Vue.js の認証でやっていく手順

1. ログインリクエストを API に送る(DONE)
2. API がトークン等なんらかの認証情報を返す
3. 受け取った情報を Vuex（Vue 上のストレージ層）に保存する
4. Vue Router で Vuex に格納したパラメータの有無を判定し、無ければログインページなどにリダイレクトする
