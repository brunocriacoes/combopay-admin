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
                ativo: 1,
                vendendor_id: 0 
            }
        }
    }, 
    methods: {
        async salvar() {
            let res = await this.Super.cadastro_admin( this.form )
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


