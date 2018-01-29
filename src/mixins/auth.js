import router from '../router'
const Auth = {
  created: function () {
    if (localStorage.getItem('auth_token') == undefined) this.to_login()
  },
  methods: {
    to_login(){router.push({name: 'LoginPage'})},
  }
}

export default Auth;