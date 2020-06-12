import Vue from 'vue'
import App from './App.vue'
import ServerStatusIndex from './ServerStatusIndex.vue'
import ServerStatusHeader from './ServerStatusHeader.vue'
import ServerStatusFooter from './ServerStatusFooter.vue'

Vue.component('server-status-index', ServerStatusIndex)
Vue.component('server-status-header', ServerStatusHeader)
Vue.component('server-status-footer', ServerStatusFooter)

new Vue({
  el: '#app',
  render: h => h(App)
})
