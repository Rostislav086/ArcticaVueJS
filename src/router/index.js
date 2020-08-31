import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';
import Arctica from '../views/Arctica.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/arctica',
    name: 'Arctica',
    component: Arctica,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
