import Vue from 'vue';
import App from './App/App.vue';
import router from './App/router';
import store from './App/store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
