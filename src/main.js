import Vue from 'vue'
import App from './App.vue'
import Toast from './lib/index'
import './style/index.css'

Vue.config.productionTip = false

Vue.use(Toast, {duration: 2000})

new Vue({
  render: h => h(App),
}).$mount('#app')
