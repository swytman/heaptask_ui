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
  async getAllTasks({commit}){
    const tasks = await api.tasks.getAllTasks()
    commit(types.RECEIVE_TASKS, { tasks })
  },
  async getTask({commit}, id){
    const task = await api.tasks.getTask(id)
    commit(types.RECEIVE_TASK, { task })
  },
  async updateTask({dispatch, commit},  data){
    await api.tasks.updateTask(data.id, data)
    dispatch('getAllTasks')
  },
  async deleteTask({dispatch, commit}, id){
    await api.tasks.deleteTask(id)
    dispatch('getAllTasks')
  },
  async createTask({dispatch, commit}, data){
    await api.tasks.createTask(data)
    dispatch('getAllTasks')
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