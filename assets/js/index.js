import Vue from './library/vue.js'
import Router from './library/vue-router.js'
import router_list from './data/router.js'
import menu from './module/c-menu.js'
import footer from './module/c-footer.js'
import header from './module/c-header.js'
import aside from './module/c-aside.js'
import metas from './module/c-metas.js'
import perfil from './module/c-perfil.js'
import privacidade from './module/c-privacidade.js'
import config from './module/c-config.js'
import instituicao from './module/c-instituicao.js'
import script from './module/c-script.js'
import modulos from './module/c-modulos.js'
import doadores from './module/c-doadores.js'
import doacoes from './module/c-doacoes.js'
import credenciais from './module/c-credenciais.js'
import usuarios from './module/c-usuarios.js'
import planos from './module/c-planos.js'
import emails from './module/c-emails.js'
import login from './module/c-login.js'
import recuperar from './module/c-recuperar.js'

Vue.use(Router)
Vue.component('c-menu', menu )
Vue.component('c-footer', footer )
Vue.component('c-header', header )
Vue.component('c-aside', aside )
Vue.component('c-metas', metas )
Vue.component('c-perfil', perfil )
Vue.component('c-privacidade', privacidade )
Vue.component('c-config', config )
Vue.component('c-instituicao', instituicao )
Vue.component('c-script', script )
Vue.component('c-modulos', modulos )
Vue.component('c-doadores', doadores )
Vue.component('c-doacoes', doacoes )
Vue.component('c-credenciais', credenciais )
Vue.component('c-usuarios', usuarios )
Vue.component('c-planos', planos )
Vue.component('c-emails', emails )
Vue.component('c-login', login )
Vue.component('c-recuperar', recuperar )

const router = new Router({ routes: router_list })

const app = new Vue({
    router,
    data: {
        title: 'Painel'
    }
}).$mount('#app')