export default {
    template: "#c-doacoes",
    data: function () {
        return {
            doacoes: [
                {  status: true, name: 'Bruno *** Vieira', card: '**** **** **** 4528', valid: '**/2028', date: '06/05/2021 15:30', price: 50, type: "cartão", frequencia: "unico" },
                {  status: false, name: 'Bruno *** Vieira', card: '**** **** **** 4528', valid: '**/2028', date: '06/05/2021 17:25', price: 100, type: "boleto", frequencia: "Recorrente" },
                {  status: true, name: 'Bruno *** Vieira', card: '**** **** **** 4528', valid: '**/2028', date: '06/05/2021 18:00', price: 200, type: "boleto", frequencia: "unico" },
            ]
        }
    },
    filters: {
        is_price( price ) {
            let valor = price.toLocaleString('pt-br', {minimumFractionDigits: 2})
            return  `R$${valor}`
        }
    }
}
