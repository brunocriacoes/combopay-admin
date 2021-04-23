export default [
    { path: '/', component: { template: '#login' } },
    { path: '/recuperar-senha', component: { template: '#recuperar_senha' } },
    { path: '/inicio', component: { template: '#inicio' } },
    { path: '/metas/:ano', component: { template: '<c-metas></c-metas>' } },
    { path: '/perfil', component: { template: '<c-perfil></c-perfil>' } },
    { path: '/politica-de-privacidade', component: { template: '<c-privacidade></c-privacidade>' } },
    { path: '/configuracao', component: { template: '<c-config></c-config>' } },
    { path: '/instituicoes', component: { template: '<c-instituicao></c-instituicao>' } },
]