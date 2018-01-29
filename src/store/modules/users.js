import * as types from '../mutation-types'
import userapi from '../../api/users'

const state = {
  logged_in: false
}

//getters
const getters = {
  logged_in: state => state.logged_in
}

//actions
const actions = {
  async authenticate({commit}, data){
    const response = await userapi.authenticate(data)
    commit(types.RECEIVE_TOKEN, response)
  }
}

// mutations
const mutations = {
  [types.RECEIVE_TOKEN] (state, { auth_token }) {
    if (auth_token) {
      state.loggen_in = true
      localStorage.setItem('auth_token', auth_token)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}