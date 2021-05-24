import App from '../library/superApp.js'
import cache from '../library/cache.js'
const Super = new App

export default {
    template: "#c-emails",
    data: function () {
        return {
            Super,
            cache,
            playload: [],
            name_flag: 'EMAILS',
        }
    },
    async mounted() {
        let res = (await this.Super.flag_all()).data
        let flag = res.find(post => post.flag == this.name_flag && post.instituicao_id == this.cache.institution)
        if (!flag) {
            let request = {
                flag: this.name_flag,
                instituicao_id: this.cache.institution,
                base64: btoa(JSON.stringify(this.playload))
            }
            let new_flag = await this.Super.flag_post(request)
        } else {
            // let data = JSON.parse(atob(flag.base64))
            // this.playload.id = data
        }
        console.log(request)
    }
}
