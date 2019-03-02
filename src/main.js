import Vue from 'vue'
import App from './App.vue'
import PointTable from 'vue-point-table'
import './../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

Vue.use(PointTable)

new Vue({
  render: h => h(App),
}).$mount('#app')
