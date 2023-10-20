import { createStore } from "vuex";

// ローカルストレージに保存されたものを取得。trello-listsは設定したキーのこと。
const savedLists = localStorage.getItem("trello-lists");

const store = createStore({
  state: {
    // 条件 ? trueなら実行 : falseなら実行
    // タスクカード用
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

    // 認証用
    authentication: [
      {
        token: "",
        username: "",
      },
    ],
  },

  mutations: {
    // タスクカード用
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] });
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1);
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body });
    },
    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1);
    },
    updateList(state, payload) {
      state.lists = payload.lists;
    },

    // 認証用
    updateAuthentication(state, payload) {
      state.authentication = payload.authentication;
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
    removeCardFromList(context, payload) {
      context.commit("removeCardFromList", payload);
    },

    updateList(context, payload) {
      context.commit("updateList", payload);
    },

    // 認証用
    updateAuthentication(context, payload) {
      context.commit = ("updateAuthentication", payload);
    },
  },
  getters: {
    totalCardCount(state) {
      let count = 0;
      state.lists.map((content) => (count += content.cards.length));
      return count;
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("trello-lists", JSON.stringify(state.lists));
});

export default store;
