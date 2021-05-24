export default [
    { path: '/', component: { template: '<c-login></c-login>' } },
    { path: '/recuperar-senha', component: { template: '<c-recuperar></c-recuperar>' } },
    { path: '/inicio', component: { template: '<c-inicio></c-inicio>' } },
    { path: '/metas/:ano', component: { template: '<c-metas></c-metas>' } },
    { path: '/perfil', component: { template: '<c-perfil></c-perfil>' } },
    { path: '/politica-de-privacidade', component: { template: '<c-privacidade></c-privacidade>' } },
    { path: '/configuracao', component: { template: '<c-config></c-config>' } },
    { path: '/instituicoes', component: { template: '<c-instituicao></c-instituicao>' } },
    { path: '/script', component: { template: '<c-script></c-script>' } },
    { path: '/modulos', component: { template: '<c-modulos></c-modulos>' } },
    { path: '/doadores', component: { template: '<c-doadores></c-doadores>' } },
    { path: '/doacoes', component: { template: '<c-doacoes></c-doacoes>' } },
    { path: '/credenciais', component: { template: '<c-credenciais></c-credenciais>' } },
    { path: '/credenciais/nova', component: { template: '<c-credenciais-novo></c-credenciais-novo>' } },
    { path: '/credenciais/editar/:id', component: { template: '<c-credenciais-editar></c-credenciais-editar>' } },
    { path: '/usuarios', component: { template: '<c-usuarios></c-usuarios>' } },
    { path: '/planos', component: { template: '<c-planos></c-planos>' } },
    { path: '/modelo-de-emails', component: { template: '<c-emails></c-emails>' } },
    { path: '/usuarios/novo', component: { template: '<c-usuarios-novo></c-usuarios-novo>' } },
    { path: '/usuarios/novo/:id', component: { template: '<c-usuarios-edit></c-usuarios-edit>' } },
    { path: '/sass', component: { template: '<c-sass></c-sass>' } },
    { path: '/sass/novo', component: { template: '<c-sass-corruente></c-sass-corruente>' } },
    { path: '/sass/novo/:id', component: { template: '<c-sass-edit></c-sass-edit>' } },
]