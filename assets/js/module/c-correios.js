import App from '../library/superApp.js'
import cache from '../library/cache.js'
const Super = new App
export default {
    template: "#c-edit-modulo",
    data: function () {
        return {
            Super,
            cache,
            form: {},
            title: 'Correios',
            flag: 'CORREIOS',
            loading: false,
            autoForm: [ 
                { label: 'Token', name: 'token' },
                { label: 'Key', name: 'name' },
            ],
            error: {
                status: false,
                text: 'Salvo com sucesso',
                type: 'success'
            },
        }
    },
    async mounted() {
      
    },
    methods: {
        async save() {
            this.loading = true
            console.log( this.form )

            // let res = await this.Super.put_institution( this.form.id, this.form )

            // this.error.status = true
            // this.error.text = res.message
            // this.error.type = res.status
            this.loading = false

        }
    }
}