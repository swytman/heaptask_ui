import axios from 'axios'

export default {
  async getAllTasks() {
    const uri = `/tasks`;
    const response = await axios.get(uri)
    console.log(response)
    return response.data
  },
  async getTask(id) {
    const uri = `/tasks/${id}`;
    const response = await axios.get(uri)
    return response.data
  },
  async updateTask(id, data) {
    const uri = `/tasks/${id}`;
    const response = await axios.patch(uri)
    return response.data
  },
  async deleteTask(id) {
    const uri = `/tasks/${id}`;
    const response = await axios.delete(uri)
    return response.data
  },
  async createTask(data) {
    const uri = `/tasks`;
    const response = await axios.post(uri, data)
    return response.data
  }
}