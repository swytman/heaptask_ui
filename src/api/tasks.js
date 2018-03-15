import requests from './requests'

export default {
  async getAllTasks() {
    const uri = `/tasks`;
    const response = await requests.with_auth().get(uri).catch( (error) => {})
    return (response ? response.data : false)
  },
  async getTask(id) {
    const uri = `/tasks/${id}`;
    const response = await requests.with_auth().get(uri).catch( (error) => {})
    return (response ? response.data : false)
  },
  async updateTask(id, data) {
    const uri = `/tasks/${id}`;
    const response = await requests.with_auth().patch(uri, data).catch( (error) => {})
    return (response ? response.data : false)
  },
  async deleteTask(id) {
    const uri = `/tasks/${id}`;
    const response = await requests.with_auth().delete(uri).catch( (error) => {})
    return (response ? response.data : false)
  },
  async createTask(data) {
    const uri = `/tasks`;
    const response = await requests.with_auth().post(uri, data).catch( (error) => {})
    return (response ? response.data : false)
  }
}
