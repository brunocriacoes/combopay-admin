import App from '../library/superApp.js'
import cache from '../library/cache.js'
const Super = new App

export default {
    template: "#c-inicio",
    data: function () {
        return {
            Super,
            cache,
            loading: false,
            resumos: [
                { label: "Total Doações", valor: 10000, estimativa: -25, color: "#ff7675" },
                { label: "Doações Concluidas", valor: 7000, estimativa: 10, color: "#55efc4" },
                { label: "Doações em Aberto", valor: 200, estimativa: 15, color: "#55efc4" },
                { label: "Doações Vencidas", valor: 1000, estimativa: 15, color: "#55efc4" },
                { label: "Doações Boletos", valor: 4000, estimativa: 0, color: "#dfe6e9" },
                { label: "Doações Creditos", valor: 5000, estimativa: 10, color: "#55efc4" },
                { label: "Doações PIX", valor: 1000, estimativa: 10, color: "#55efc4" },
                { label: "Doações Previstas", valor: 15000, estimativa: 0, color: "#dfe6e9" },
                { label: "Novos Doadores", valor: 39, estimativa: 25, color: "#55efc4" },
                { label: "Doadores Recorrentes", valor: 20, estimativa: 0, color: "#0984e3" },
                { label: "Doadores Únicos", valor: 30, estimativa: 0, color: "#dfe6e9" },
                { label: "Doação Media", valor: 89, estimativa: 0, color: "#dfe6e9" },
                { label: "Doadores Adinplentes", valor: 50, estimativa: 0, color: "#0984e3" },
                { label: "Doadores Inadimplentes", valor: 7, estimativa: 0, color: "#0984e3" },
                { label: "", valor: 0, estimativa: 0, color: "#dfe6e9" },
            ]
        }
    }
}