import { createApp } from "vue";
import { createStore } from "vuex";

const savedLists = localStorage.getItem("trello-lists");

const store = createStore({
  state() {
    return {
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
    };
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] });
    },

    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1);
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit("addlist", payload);
    },
    removelist(context, payload) {
      context.commit("removelist", payload);
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
