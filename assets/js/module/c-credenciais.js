import menus from '../data/menu.js'
export default {
    template: "#c-credenciais",
    data: function () {
        return {
            credenciais: [
                { name: 'SuperAdmin', permissao: 'inicio,doadores,doacoes,credenciais,usuarios,instituicoes,planos,metas,modulos,estilo,modelo_de_emails,politica_de_privacidade,configuracao,perfil,script,sair' },
                { name: 'Admin', permissao: 'inicio,doadores,doacoes,usuarios,planos,metas,modulos,estilo,modelo_de_emails,politica_de_privacidade,configuracao,perfil,script,sair' },
                { name: 'Ajudante', permissao: 'inicio,doacoes,metas,modulos,estilo,modelo_de_emails,politica_de_privacidade,perfil,sair' },
            ],
            menus: menus
        }
    }, 
    filters: {
        get_name_by_id( id ) {
            let permissao = menus.find( post => post.id == id )
            return permissao.text
        }
    }
}


