import Vue from 'vue'
import Router from 'vue-router'
import index from '../src/components/index.vue'
import order from '../src/components/order.vue'
import Supplier from '../src/components/Supplier.vue'
import Mer_mgt from '../src/components/Merchant_mgt.vue'

Vue.use(Router)
const Error = {template: '<p style="color: red">is Error!!</p>'}
export default new Router({
  routes: [
    {
      path: '/order_mgt',
      name: '订单管理',
      component: order
    },
    {
      path: '/Supplier',
      name: '供应商管理',
      component: Supplier
    },
    {
      path: '/Merchant_mgt',
      name: '商户管理',
      component: Mer_mgt
    },
    {
      path: '*',
      name:'首页',
      component:index
    }
  ]
})
