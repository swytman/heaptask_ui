import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import CreateTask from './pages/tasks/CreateTask.vue';
import TasksList from './pages/tasks/TasksList.vue';
import EditTask from './pages/tasks/EditTask.vue';
import LoginPage from './pages/users/LoginPage.vue';
import RegistrationPage from './pages/users/RegistrationPage.vue';

// Для путей с параметрами передаем их чере props как рекомендуют здесь https://router.vuejs.org/ru/essentials/passing-props.html

const router = new VueRouter({
    mode: 'history',
    routes: [
      { name: 'LoginPage', path: '/login', component: LoginPage },
      { name: 'RegistrationPage', path: '/registration', component: RegistrationPage },
      { name: 'CreateTask', path: '/tasks/new', component: CreateTask },
      { name: 'TasksList', path: '/tasks', component: TasksList },
      { name: 'EditTask', path: '/tasks/:id/edit', component: EditTask }
    ]
});

export default router;
