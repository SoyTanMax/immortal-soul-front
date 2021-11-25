import { createStore } from "vuex";

export default createStore({
  state: {
      currentChapter: 0,
      user: false
  },
  mutations: {
      CHANGE_CHAPTER(state, id){
          state.currentChapter = id
      }
  },
  actions: {},
  getters: {}
});
