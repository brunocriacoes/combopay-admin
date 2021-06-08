export default {
    template: "#c-planos",
    data: function () {
        return {
            planos: [
                { name: 'Bronze', price: 25, id: '1' },
                { name: 'Bronze', price: 50, id: '1' },
                { name: 'Bronze', price: 100, id: '1' },
                { name: 'Bronze', price: 200, id: '1' },
            ],
        }
    },
    methods: {
        async apagar( id ) {

        }
    },
    filters: {
        is_price( price ) {
            let valor = price.toLocaleString('pt-br', {minimumFractionDigits: 2})
            return  `R$${valor}`
        }
    }
}


