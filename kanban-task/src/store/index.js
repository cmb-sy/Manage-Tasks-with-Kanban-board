import { createApp } from "vue";
import { createStore } from "vuex";

// ローカルストレージに保存されたものを取得。trello-listsは設定したキー
const savedLists = localStorage.getItem("trello-lists");

const store = createStore({
  state: {
    // 条件 ? trueなら実行 : falseなら実行
    lists: savedLists
      ? JSON.parse(savedLists)
      : [
          {
            title: "Backlog",
            cards: [{ body: "English" }, { body: "Mathematics" }],
          },
          {
            title: "Todo",
            cards: [{ body: "Science" }],
          },
          {
            title: "Doing",
            cards: [],
          },
        ],
  },

  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] });
    },

    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1);
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body });
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit("addlist", payload);
    },
    removelist(context, payload) {
      context.commit("removelist", payload);
    },

    addCardToList(context, payload) {
      context.commit("addCardToList", payload);
    },
  },
  getters: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem("trello-lists", JSON.stringify(state.lists));
});

const app = createApp({});
app.use(store); // Vue 3.0ではapp.useでVuexを使用します
app.mount("#app"); // あなたのVueアプリケーションに適したマウントポイントを指定してください

export default store;
