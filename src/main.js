import Vue from 'vue'
import App from './App.vue'
import store from './store';

Vue.config.productionTip = false

new Vue({
  store, // 모든 컴포넌트에서 store에 접근이 가능해짐
  render: h => h(App),
}).$mount('#app')
