import { Auth } from '@/models/Auth'
import { User } from '@/models/User'
import { Commit, Dispatch } from 'vuex'

export default {
  state: {
    userLogged: null,
    accessToken: null,
    refreshToken: null,
    tokenType: null,
  },
  mutations: {
    setAccessToken(state: any, accessToken: string) {
      state.accessToken = accessToken
    },
    setRefreshToken(state: any, refreshToken: string) {
      state.refreshToken = refreshToken
    },
    setTokenType(state: any, tokenType: string) {
      state.tokenType = tokenType
    },
    setUser(state: any, user?: User) {
      state.userLogged = user
      user ? localStorage.setItem('user', JSON.stringify(user)) : localStorage.removeItem('user')
    },
  },
  actions: {
    updateAuthCredentials({ commit }: { commit: Commit }, credentials: Auth) {
      commit('setAccessToken', credentials.accessToken)
      commit('setRefreshToken', credentials.refreshToken)
      commit('setTokenType', credentials.tokenType)
      credentials.accessToken ? localStorage.setItem('credentials', JSON.stringify(credentials)) : localStorage.removeItem('credentials')
    },
    updateUser({ commit }: { commit: Commit }, user: User) {
      commit('setUser', user)
    },
    logout({ commit }: { commit: Commit }) {
      commit('setAccessToken', '')
      commit('setRefreshToken', '')
      commit('setTokenType', '')
      commit('setUser', null)
      localStorage.removeItem('credentials')
    },
    fetchAuhtenticationStatus({ dispatch }: { dispatch: Dispatch }) {
      const rowCredentials: string = localStorage.getItem('credentials') || ''
      const rowUser: string = localStorage.getItem('user') || ''
      if (rowCredentials) dispatch('updateAuthCredentials', <Auth>JSON.parse(rowCredentials))
      if (rowUser) dispatch('updateUser', <User>JSON.parse(rowUser))
      return rowCredentials && rowUser
    },
  },
  getters: {
    getToken(state: any) {
      return `${state.tokenType} ${state.accessToken}`
    },
    getRefreshToken(state: any) {
      return state.refreshToken
    },
    isLogged(state: any) {
      return state.accessToken && state.refreshToken && state.userLogged
    },
    getUserLogged(state: any) {
      return state.userLogged
    },
  },
}
