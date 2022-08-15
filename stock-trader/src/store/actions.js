import Vue from 'vue'

export default {
  loadData({commit}) {
    Vue.prototype.$http('data.json').then(res => {
      const data = res.data
      if(data) {
        commit('setStocks', data.stocks)
        commit('setPortifolio', {
          funds: data.funds,
          stockPortifolio: data.stocksPortifolio
        })
      }
    })
  }
}