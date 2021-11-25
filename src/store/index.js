import { createStore } from 'vuex'

export default createStore({
  state: {
      selectedChapter: 0
  },
  mutations: {
      changeChapter( state ) {
          state.count++
      }
  }
})