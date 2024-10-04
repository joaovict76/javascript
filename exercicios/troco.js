/**
 * valor de troco
 * @author João victor
 */

const input = require ('readline-sync')

let valorpago, total, troco

console.clear()
console.log("troco")

//entrada 
valorpago = Number(input.question("digite o valor pago: "))
total = Number(input.question("digite o total da compra: "))

//processamento
troco = (valorpago - total)

console.log(`troco do cliente: ${troco.toFixed(2)}`)
