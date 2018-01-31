import axios from 'axios'

export default {
  async getAllTasks() {
    const uri = `/tasks`;
    const response = await axios.get(uri).catch( (error) => {})
    return (response ? response.data : false)
  },
  async getTask(id) {
    const uri = `/tasks/${id}`;
    const response = await axios.get(uri).catch( (error) => {})
    return (response ? response.data : false)
  },
  async updateTask(id, data) {
    const uri = `/tasks/${id}`;
    const response = await axios.patch(uri).catch( (error) => {})
    return (response ? response.data : false)
  },
  async deleteTask(id) {
    const uri = `/tasks/${id}`;
    const response = await axios.delete(uri).catch( (error) => {})
    return (response ? response.data : false)
  },
  async createTask(data) {
    const uri = `/tasks`;
    const response = await axios.post(uri, data).catch( (error) => {})
    return (response ? response.data : false)
  }
}