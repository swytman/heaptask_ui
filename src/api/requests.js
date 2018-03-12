import axios from 'axios'

const with_auth = (() => {
  return axios.create({
    baseURL: API_ROOT,
    timeout: 10000,
    headers: {'Authorization': localStorage.getItem('auth_token')}
  });
});

const no_auth = (() => {
  return axios.create({
    baseURL: API_ROOT,
    timeout: 10000
  });
});

export default {
  with_auth,
  no_auth
}
