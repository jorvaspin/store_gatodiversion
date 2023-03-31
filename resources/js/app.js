require('./bootstrap');

//init vue
import Vue from 'vue';
window.Vue = require('vue');
Vue.config.productionTip = false;

//Vuex
window.Vuex = require('vuex');

//vue router
import Router from './routes.js';

//import app page
import App from './App.vue';

const app = new Vue({
  // el: '#app',
  router: Router,
  render: h => h(App),
}).$mount('#app');
