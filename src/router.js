import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import CreateTask from './components/tasks/CreateTask.vue';
import TasksList from './components/tasks/TasksList.vue';
import EditTask from './components/tasks/EditTask.vue';
import LoginPage from './components/users/LoginPage.vue';

// Для путей с параметрами передаем их чере props как рекомендуют здесь https://router.vuejs.org/ru/essentials/passing-props.html

const router = new VueRouter({
    mode: 'history',
    routes: [
      { name: 'LoginPage', path: '/login', component: LoginPage },
      { name: 'CreateTask', path: '/tasks/new', component: CreateTask },
      { name: 'TasksList', path: '/tasks', component: TasksList },
      { name: 'EditTask', path: '/tasks/:id/edit', component: EditTask }
    ]
});

export default router;