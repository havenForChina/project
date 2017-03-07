import Vue from 'vue'
import App from './App'
import router from '../router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import '../static/iconfont/iconfont.css'
import leftBar from 'mock/leftBar'
import order from 'mock/order'
import merchant from 'mock/merchant'
import activity from 'mock/activity'
import redpackage from 'mock/redpackage'
Vue.use(ElementUI)
Vue.use(Vuex)
let state = {
  leftBar:leftBar,
  order:order,
  merchant:merchant,
  activity:activity,
  redpackage:redpackage
}
const store = new Vuex.Store({
  state:state,
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
    changeActivityrData(state,data){
      state.activity = data
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