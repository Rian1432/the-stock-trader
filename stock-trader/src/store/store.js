import Vue from 'vue'
import Vuex from 'vuex'

import portifolio from './modules/portifolio'
import stocks from './modules/stocks'

import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store ({
  actions,
  modules: {
    portifolio,
    stocks
  }
})