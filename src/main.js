import Vue from 'vue'
import App from './App.vue'

Vue.directive('note-focus', function (el, binding) {
  if (binding.value) {
    el.focus()
  }
})
  
new Vue({
  el: '#app',
  render: h => h(App)
})
