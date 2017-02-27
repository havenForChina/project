import Vue from 'vue'
import App from './App'
import router from '../router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import '../static/js/jquery'
import 'element-ui/lib/theme-default/index.css'
import '../static/iconfont/iconfont.css'
import '../static/style/base.css'
import leftBar from 'mock/leftBar'
import order from 'mock/order'
Vue.use(ElementUI)
Vue.use(Vuex)
let mock = {
  leftBar:leftBar,
  order:order
}
const store = new Vuex.Store({
  state:mock,
  mutations:{
    dialog(state){
      state.showDialog = !state.showDialog
    },
    changeLeftBarData(state,data){
      state.leftBar = data
    },
    changeOrderData(state,data){
      state.order = data
    },
    openDialog(state){
      state.dialogVisible = true
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
