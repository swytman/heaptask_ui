import axios from 'axios'
import tasks from './tasks'
import users from './users'
import router from '../router'

axios.defaults.baseURL = API_ROOT;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('auth_token');

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error.response.status) {
    console.log('intercept!')
    // router.push({name: 'LoginPage'})
  } else {
    return Promise.reject(error);
  }
});


const api = {
  tasks,
  users
}

export default api