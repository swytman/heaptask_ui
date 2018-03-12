import requests from './requests'

export default {
  async authenticate(data) {
    const uri = `/authenticate`;
    const response = await requests.no_auth().post(uri, data).catch( (error) => {})
    return (response ? response.data : false)
  },
  async create(data) {
    const uri = `/users`;
    const response = await requests.no_auth().post(uri, data).catch( (error) => {})
    return (response ? response.data : false)
  }
}