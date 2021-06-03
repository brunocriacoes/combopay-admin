import App from '../library/superApp.js'
import cache from '../library/cache.js'
import mccs from '../data/mccs.js'
const Super = new App
export default {
    template: "#c-instituicao",
    data: function () {
        return {
            Super,
            cache,
            mccs,
            form: {
                domain_person: null,
                bairro: null,
                cidade: null,
                cnpj: null,
                complemento: null,
                dominio: null,
                dominio_personalizado: null,
                email: null,
                estado: null,
                id: 1,
                nome_fantasia: null,
                razao_social: null,
                rua: null,
                subdominio: null,
                telefone: null,
                cep: null,
                birthdate: null,
                mcc: '1',
            },
            loading: false,
            feedback: {
                status: null,
                message: null
            }
        }
    },
    async mounted() {
       
    },
    methods: {
        async save() {
            this.loading = true
            let res = await this.Super.post_institution( this.form )
            console.log(res)
            this.loading = false
            this.feedback.status = res?.status
            window.location.href = "#/sass/1"
            this.feedback.message = res?.message
        }
    }
}