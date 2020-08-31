import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import './style/swiper-bundle.min.css';

Vue.config.productionTip = false;
Vue.use(axios, VueAxios);

new Vue({

  router,
  render: (h) => h(App),
}).$mount('#app');
