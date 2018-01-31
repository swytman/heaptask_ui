import axios from 'axios'

export default {
  async authenticate(data) {
    const uri = `/authenticate`;
    const response = await axios.post(uri, data).catch( (error) => {})
    return (response ? response.data : false)
  },
  async create(data) {
    const uri = `/users`;
    const response = await axios.post(uri, data).catch( (error) => {})
    return (response ? response.data : false)
  }
}