import * as types from '../mutation-types'
import api from '../../api'

const state = {
  task: null,
  tasks: []
}

//getters
const getters = {
  allTasks: state => state.tasks,
  task: state => state.task
}

//actions
const actions = {
  async getAllTasks({dispatch, commit}){
    dispatch('startLoading')
    const tasks = await api.tasks.getAllTasks()
    commit(types.RECEIVE_TASKS, { tasks })
    dispatch('stopLoading')
  },
  async getTask({dispatch, commit}, id){
    dispatch('startLoading')
    const task = await api.tasks.getTask(id)
    commit(types.RECEIVE_TASK, { task })
    dispatch('stopLoading')
  },
  async updateTask({dispatch, commit},  data){
    dispatch('startLoading')
    await api.tasks.updateTask(data.id, data)
    dispatch('stopLoading')
  },
  async deleteTask({dispatch, commit}, id){
    dispatch('startLoading')
    await api.tasks.deleteTask(id)
    dispatch('stopLoading')
  },
  async createTask({dispatch, commit}, data){
    dispatch('startLoading')
    await api.tasks.createTask(data)
    dispatch('stopLoading')
  }
}

// mutations
const mutations = {
  [types.RECEIVE_TASKS] (state, { tasks }) {
    state.tasks = tasks
  },
  [types.RECEIVE_TASK] (state, {task} ) {
    state.task = task
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
