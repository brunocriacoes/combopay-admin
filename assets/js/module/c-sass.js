import App from '../library/superApp.js'
const Super = new App
export default {
    template: "#c-sass",
    data: function () {
        return {
            Super,
            playload: [],
            steps: []
        }
    },
    async mounted() {
        let all_institution = await this.Super.all_institution()
        this.playload = all_institution.data
        let total_pages = Math.ceil( all_institution.total / 10 )
        for (let index = 0; index < total_pages; index++) {
            this.steps.push( index )            
        }
    }
}


