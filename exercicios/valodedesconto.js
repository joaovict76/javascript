/**
 * calculo de valor do desconto
 * @author João Victor
 */

const input = require('readline-sync')

let totalDesconto, total, desconto

console.clear()
console.log("calculo do valor de descoto")

//entrada 
total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor de desconto em %: "))

//processamemto
totalDesconto = total - ((desconto * total) / 100)

//saida
console.log(`total com desconto: ${totalDesconto.toFixed(2)}`)
