import Vue from 'vue'
import App from './App'
import router from '../router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/base.css'
import leftBar from 'mock/leftBar'
Vue.use(ElementUI)
Vue.use(Vuex)
let mock = {
  leftBar:leftBar
}
const store = new Vuex.Store({
  state:mock,
  mutations:{
    dialog(state){
      state.showDialog = !state.showDialog
    },
    changeLeftBarData(state,data){
      state.leftBar = data
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
