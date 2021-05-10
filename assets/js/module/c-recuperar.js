import superApp from '../library/superApp.js'
const App = new superApp
export default {
    template: "#recuperar_senha",
    data: function () {
        return {
            App,
            email: 'br.rafael@outlook.com',
            message: true
        }
    },
    methods: {
        async recuperar_senha() {
            let res = await this.App.recuperar_senha( this.email )
            console.log( res )
            this.message = true
        }
    }
}