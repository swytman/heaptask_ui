import axios from 'axios'

export default {
  async authenticate(data) {
    const uri = `/authenticate`;
    const response = await axios.post(uri, data)
    return response.data
  }
}