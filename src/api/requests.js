import axios from 'axios'
import router from "../router";
import store from '../store'
import errors from '../locale/ru/errors.json'

const with_auth = (() => {
  const instance = axios.create({
    baseURL: API_ROOT,
    timeout: 10000,
    headers: {'Authorization': localStorage.getItem('auth_token')}
  });
  return wrap_interceptor(instance, true)
});

const no_auth = (() => {
  const instance = axios.create({
    baseURL: API_ROOT,
    timeout: 10000
  });
  return wrap_interceptor(instance)
});

const wrap_interceptor = (instance, auth_redirect = false) => {
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (auth_redirect && 401 === error.response.status){
      localStorage.removeItem('auth_token')
      router.push({name: 'LoginPage'})
    }
    show_error(error.response.data.errors)

    return Promise.reject(error);
  });
  return instance
}

const show_error = (all_errors) => {
  const first_key = Object.keys(all_errors)[0]
  const first_error = all_errors[first_key]
  let message_text = first_key + ': ' + first_error
  if (errors[first_key] && errors[first_key][first_error[0]]){
    message_text = errors[first_key][first_error[0]]
  }
  store.dispatch('showMessage', {message_text: message_text})
  console.warn(all_errors)
}

export default {
  with_auth,
  no_auth
}
