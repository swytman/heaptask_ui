import * as types from '../mutation-types'

const state = {
    loading: false,
    message_text: 'message_text',
    message: false
}

const getters = {
    loading: state => state.loading,
    message: state => state.message,
    message_text: state => state.message_text
}

//actions
const actions = {
    async startLoading({commit}){
        commit(types.START_LOADING)
    },
    async stopLoading({commit}){
        commit(types.STOP_LOADING)
    },
    async showMessage({commit}, params){
        commit(types.SHOW_MESSAGE, params)
    },
    async setMessage({commit}, value){
        commit(types.SET_MESSAGE, value)
    }
}

//mutations
const mutations = {
    [types.START_LOADING] (state) {
        state.loading = true
    },
    [types.STOP_LOADING] (state) {
        state.loading = false
    },
    [types.SHOW_MESSAGE] (state, params) {
        state.message_text = params.message_text
        state.message = true
    },
    [types.SET_MESSAGE] (state, value) {
        state.message = value
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
