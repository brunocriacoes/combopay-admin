import App from '../library/superApp.js'
const Super = new App
export default {
    template: "#c-usuarios",
    data: function () {
        return {
            Super,
            usuarios: [
                { name: 'Bruno', tel: '+5500999999999', email: 'br.rafael@outlook.com' },
                { name: 'Mike', tel: '5500999999999', email: 'mike1987@gmail.com' }, 
                { name: 'Maria', tel: '5500999999999', email: 'maria.silva@hotmail.com' },
                { name: 'Jose', tel: '5500999999999', email: 'jose19.matos@gmail.com' },
            ]
        }
    },
    async mounted() {
        this.usuarios = (await this.Super.all_admins()).data
        // console.log(res)
    }
}
