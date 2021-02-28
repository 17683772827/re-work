const state = {
  test1: 'sss',
  test2: 'sadad'
}
const mutations = {
  SetTest1: (state, val) => { state.test1 = val },
  SetTest2: (state, val) => { state.test2 = val }
}
const actions = {
  SetTest1: ({ commit, state }, val) => {
    commit('SetTest1', val)
  },
  SetTest2: ({ commit, state }, val) => {
    commit('SetTest2', val)
  }
}
const getters = {
  getTest1: state => state.test1
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
