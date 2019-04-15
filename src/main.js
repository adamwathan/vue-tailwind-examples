import Vue from 'vue'
import PortalVue from 'portal-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(PortalVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
