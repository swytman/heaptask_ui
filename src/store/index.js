import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './modules/tasks'
import users from './modules/users'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        tasks,
        users
    }
});

export default store;
