import superApp from '../library/superApp.js'
const App = new superApp
export default {
    template: "#login",
    data: function () {
        return {
            App,
            email: 'br.rafael@outlook.com',
            password: '123'
        }
    },
    methods: {
        async login() {
           let res = await this.App.login( this.email, this.password )
        }
    }
}