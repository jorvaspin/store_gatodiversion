require('./bootstrap');


import { createApp } from 'vue'
import App from './App.vue'
//vue router
import router from './routes';
import store from './store'

// vue tailwind
import '../css/app.css';

//Vuex
window.Vuex = require('vuex');

const app = createApp(App)
app.use(router)
app.mount('#app')

// const app = new Vue({
//   // el: '#app',
//   router: Router,
//   render: h => h(App),
// }).$mount('#app');
