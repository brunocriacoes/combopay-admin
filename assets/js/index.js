import Vue from './library/vue.js'
import Router from './library/vue-router.js'
import router_list from './data/router.js'
import menu from './module/c-menu.js'
import footer from './module/c-footer.js'
import header from './module/c-header.js'
import aside from './module/c-aside.js'
import metas from './module/c-metas.js'

Vue.use(Router)
Vue.component('c-menu', menu )
Vue.component('c-footer', footer )
Vue.component('c-header', header )
Vue.component('c-aside', aside )
Vue.component('c-metas', metas )

const router = new Router({ routes: router_list })

const app = new Vue({
    router,
    data: {
        title: 'Painel'
    }
}).$mount('#app')