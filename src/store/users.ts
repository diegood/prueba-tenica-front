import { User } from '@/models/User'
import { Commit } from 'vuex'

export default {
  state: {
    users: [],
  },
  mutations: {
    setUsers(state: any, users: User[]) {
      state.users = users
    },
    removeUser(state: any, userId: string) {
      state.users = state.users.filter((u: User) => u.id !== userId)
    },
  },
  actions: {
    updateUsers({ commit }: { commit: Commit }, users: User[]) {
      commit('setUsers', users)
    },
    deleteUser({ commit }: { commit: Commit }, user: User) {
      commit('removeUser', user.id)
    },
  },
  getters: {
    users(state: any): User[] {
      return state.users
    },
    hasUsers(state: any) {
      return state.users.length > 0
    },
  },
}
