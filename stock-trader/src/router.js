import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Portifoliio from './components/portifolio/Portifolio'
import Stocks from './components/stocks/Stocks'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/Portifolio', component: Portifoliio },
        { path: '/stocks', component: Stocks },
    ]
})