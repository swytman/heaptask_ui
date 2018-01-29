export default {
  authorizationHeader(){
    if (localStorage.getItem('auth_token')) {
      return {headers: {'Authorization': localStorage.getItem('auth_token')}}
    } else {
      return {headers: {}}
    }
  }
}