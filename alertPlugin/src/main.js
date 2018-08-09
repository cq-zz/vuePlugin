// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $alert from './lib/alertPlugin'
import compute from './lib/compute'

Vue.config.productionTip = false
Vue.use($alert)
Vue.use(compute)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render:h=>h(App)
})
