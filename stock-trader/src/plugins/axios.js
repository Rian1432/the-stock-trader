import Vue from 'vue'
import Axios from 'axios'

Vue.use({
  install(Vue) {
    Vue.prototype.$http = Axios.create({
      baseURL: 'https://stock-trader-4da36-default-rtdb.firebaseio.com/'
    })
  }
})