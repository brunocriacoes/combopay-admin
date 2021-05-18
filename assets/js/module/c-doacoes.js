export default {
    template: "#c-doacoes",
    data: function () {
        return {
            doacoes: []
        }
    },
    filters: {
        is_price( price ) {
            let valor = price.toLocaleString('pt-br', {minimumFractionDigits: 2})
            return  `R$${valor}`
        }
    }
}
