import App from '../library/superApp.js'
import cache from '../library/cache.js'
const Super = new App

export default {
    template: "#c-planos-novo",
    data: function () {
        return {
            Super,
            cache,
            form: {
                nome: null,
                valor: null,
            },
            loading: false,
            error: {
                status: false,
                text: 'Salvo com sucesso',
                type: 'success'
            }
        }
    },
    methods: {

        async save() {
            this.loading = true

            // let res = await this.Super.flag_put(this.flag_id, playload )

            this.error.status = true
            this.error.text = res?.message
            this.error.type = res?.status
            this.loading = false
        }
    }
}