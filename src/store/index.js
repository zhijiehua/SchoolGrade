import vue from 'vue'
import vuex from 'vuex'
import state from './state'

vue.use(vuex)

export default new vuex.Store({
  state,
  actions: {
    peopleIn (ctx, mesg) {
      ctx.commit('peopleIn', mesg)
      console.log(mesg)
    }
  },
  mutations: {
    peopleIn (state, mesg) {
      state.mesg = mesg
      try {
        localStorage.mesg = mesg
      } catch (e) {}
    }
  }
})
