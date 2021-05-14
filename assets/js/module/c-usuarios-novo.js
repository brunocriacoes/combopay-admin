import App from '../library/superApp.js'
const Super = new App
export default {
    template: "#c-usuarios-novo",
    data: function () {
        return {
            Super,
            credenciais: [],
            error: null,
            form: {
                nome: null,
                email: null,
                instituicao_id: 1,
                telefone: null,
                credencial: 1,
                password: null,
                password_confirm: null,
                ativo: true,
                vendendor_id: null
            }
        }
    }, 
    methods: {
        async salvar() {
            let is_checks = Object.keys(this.checks).filter( key => this.checks[key] == true  ).join(',')
            let res = await this.Super.post_credential({
                nome: this.title,
                recursos: is_checks
            })
            if( res.status == 'success' ) {
                window.location.href = "#/credenciais"
            }
        }
    },
    async mounted() {
        let res = await this.Super.all_credential()
        this.credenciais = res.data
    }
}


