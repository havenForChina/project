import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import bar from 'mock/leftBar'
import order from 'mock/order'
import merchant from 'mock/merchant'
import activity from 'mock/activity'
import wallet from 'mock/redpackage'
Vue.use(Vuex)

const state = {
    websiteInfo:{},
    barData:bar,
    merchantData:merchant,
    orderData:order,
    activityData:activity,
    walletData:wallet
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})