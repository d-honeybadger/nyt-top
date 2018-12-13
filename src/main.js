import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import './stylus/main.styl'; // customize Vuetify styling
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
