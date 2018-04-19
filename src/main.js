// main.js

import Vue from 'vue';
import Vuetify from 'vuetify';
import axios from 'axios';
import router from './router';
import store from './store';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';
Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(VeeValidate)
import App from './pages/App.vue';
import {formatDate} from './utils'

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

Vue.filter('formatDate', formatDate)

Vue.config.devtools = true;
