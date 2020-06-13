import Vue from 'vue'
import App from './App.vue'
import ServerStatusIndex from './components/server/ServerStatusIndex.vue'
import ServerStatusHeader from './components/shared/ServerStatusHeader.vue'
import ServerStatusFooter from './components/shared/ServerStatusFooter.vue'

Vue.component('server-status-index', ServerStatusIndex)
Vue.component('server-status-header', ServerStatusHeader)
Vue.component('server-status-footer', ServerStatusFooter)

new Vue({
  el: '#app',
  render: h => h(App)
})
