export default [
    { path: '/', component: { template: '#login' } },
    { path: '/recuperar-senha', component: { template: '#recuperar_senha' } },
    { path: '/inicio', component: { template: '#inicio' } },
    { path: '/metas/:ano', component: { template: '<c-metas></c-metas>' } },
]