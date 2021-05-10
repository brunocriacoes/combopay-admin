import superApp from '../library/superApp.js'
import cache from '../library/cache.js'
const App = new superApp
export default {
    template: "#login",
    data: function () {
        return {
            App,
            cache,
            email: 'br.rafael@outlook.com',
            password: 'mangaka123',
            message_error: false
        }
    },
    methods: {
        async login() {
            let res = await this.App.login(this.email, this.password)
            if (res.status_code == 200) {
                this.cache.user_logged_name = res?.admin?.nome
                this.cache.user_logged_id = res?.admin?.credencial
                this.cache.bearer = res?.token?.access_token
                window.location.href = "#/inicio"
            } else {
                this.message_error = true
            }
        }
    }
}