import lista from '../data/menu.js'
export default {
    template: "#c-menu",
    data: function() {
        return {
            lista,
            active_path: null
        }
    },
    methods: {
        sair() {
            let cache = [
                'user_logged_name',
                'user_logged_id',
                'user_logged_credential_id',
                'bearer',
            ]
            cache.forEach( name => {
                localStorage.removeItem( name )
            } )
        }
    },
    mounted() {
        this.active_path = `#${this.$router.currentRoute.fullPath}`
    }
}