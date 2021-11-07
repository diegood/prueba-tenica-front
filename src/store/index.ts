import { createStore } from 'vuex'
import authentication from './authentication'
import users from './users'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authentication,
    users,
  },
})
