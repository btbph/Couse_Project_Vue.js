import '@babel/polyfill'
import Vue from 'vue'

import '@/plugins/vuetify'
import '@/plugins/goldenLayout'
import App from '@/App.vue'
import store from '@/store/store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
