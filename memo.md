vue3 は vue.draggable.next で vue2 は VueDraggable が対応。いずれも書き方が異なる。

firebase の public を消すと、同じ画面表示のバグが消えた

vue-router も同様
https://note.com/takoyaki_shikibu/n/n88d3660f8539

pip install -r requirements.txt
pip freeze > requirements.txt

Django には関数ベースのビューと、クラスベースのビューの 2 種類がある
クラスベースの方は利用する時に as_view というクラスメソッドから view オブジェクトを生成している

既存の DOM 要素を Vue.js が生成する DOM 要素で置き換えること。Vue のマウントとは、Vue インスタンスを DOM にアタッチする。

request.body は通常、POST リクエストの本文データを取得するために使用されます。
GET リクエストのクエリパラメータは通常、request.GET ディクショナリを使用して取得されます。このディクショナリには、URL から取得したクエリパラメータが含まれています。
axios.post メソッドの第 2 引数として { params: jsonData } を指定していますが、これは正しい方法ではありません。POST リクエストのデータを送信する場合、params オプションを使用せず、データオブジェクトを直接渡す必要があります.
const response = await axios.post("/accounts/sample", jsonData);

## Vue.js の認証でやっていく手順

1. ログインリクエストを API に送る(DONE)
2. API がトークン等なんらかの認証情報を返す
3. 受け取った情報を Vuex（Vue 上のストレージ層）に保存する
4. Vue Router で Vuex に格納したパラメータの有無を判定し、無ければログインページなどにリダイレクトする
5. signout や signup もできるようにする。
