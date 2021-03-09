import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './stores/store';
import vuelidate from './plugins/vulidate'


Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  vuelidate,
  store,
  render: h => h(App)
}).$mount('#app')
  