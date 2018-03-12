import axios from 'axios'
import tasks from './tasks'
import users from './users'
import router from '../router'

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (401 === error.response.status){
    localStorage.removeItem('auth_token')
    router.push({name: 'LoginPage'})
  }
  return Promise.reject(error);
});

const api = {
  tasks,
  users
}

export default api