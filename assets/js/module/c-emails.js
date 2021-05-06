export default {
    template: "#c-emails",
    data: function () {
        return {
            emails: [
                { name: 'Recuperar Carrinho', cron: '15 min' },
                { name: 'tornece recorrente', cron: '30 dias' },
                { name: 'você já é recorrente ', cron: '60 dias' },
            ]
        }
    }
}
