import Vue from './library/vue.js'
import Router from './library/vue-router.js'
import router_list from './data/router.js'

Vue.use(Router)

const router = new Router({ routes: router_list })

const app = new Vue({
    router,
    data: {
        title: 'Painel'
    }
}).$mount('#app')