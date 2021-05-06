export default {
    template: "#c-planos",
    data: function () {
        return {
            planos: [
                { name: 'Bronze', price: 25 },
                { name: 'Bronze', price: 50 },
                { name: 'Bronze', price: 100 },
                { name: 'Bronze', price: 200 },
            ],
        }
    },
    filters: {
        is_price( price ) {
            let valor = price.toLocaleString('pt-br', {minimumFractionDigits: 2})
            return  `R$${valor}`
        }
    }
}


