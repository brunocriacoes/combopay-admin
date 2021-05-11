import App from '../library/superApp.js'
import cache from '../library/cache.js'
const Super = new App
export default {
    template: "#c-perfil",
    data: function () {
        return {
            Super,
            cache,
            id: null,
            nome: null,
            email: null,
            telefone: null,
            senha: '',
            confirmar_senha: '',
            messageAlterPass: {
                status: false,
                text: null
            },
        }
    },
    methods: {
        async alterar_senha() {
            this.messageAlterPass.status = false
            if (this.senha != this.confirmar_senha) {
                this.messageAlterPass.status = true
                this.messageAlterPass.text = 'As senhão estão diferentes'
                return
            }
            if (this.senha.length < 6) {
                this.messageAlterPass.status = true
                this.messageAlterPass.text = 'A senha deve ter no minimo 6 caracteres'
                return
            }
            let res = await this.Super.alterar_senha(this.id, this.senha)
            console.log(res)
        },
        async atualizar() {
            console.log(this.App)
            let res = await this.Super.put_admin(this.id, {
                email: this.email,
                telefone: this.telefone,
                nome: this.nome
            })
        }
    }
}

