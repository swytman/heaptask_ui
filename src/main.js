// main.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
import router from './router';
import store from './store';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
import App from './components/App.vue';
import {formatDate} from './utils'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (!store.getters.logged_in && to.path!='/login'){
//     next({ path: '/login'});
//   } else {
//     next();
//   }
// });

Vue.filter('formatDate', formatDate)

Vue.config.devtools = true;
