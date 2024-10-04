/**
 * pdv
 * @author João Victor 
 */

const input = require('readline-sync')
 let total, desconto, troco, totaldesconto, valordesconto, valorpago
console.clear

console.log(".------..------..------.")
console.log("|P.--. ||D.--. ||V.--. |")
console.log("| :/\\: || :/\\: || :(): |")
console.log("| (__) || (__) || ()() |")
console.log("| '--'P|| '--'D|| '--'V|")
console.log("`------'`------'`------'")
console.log("")

//desconto
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento 
valordesconto = (desconto * total) / 100

//processamentyo 2 
totaldesconto = total - valordesconto

//saida 1
console.log("")
console.log("---------------------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`desconto: ${desconto}%`)
console.log(`Valor do desconto: ${valordesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totaldesconto.toFixed(2)}`)
console.log("")

//entrada 2 
valorpago = Number(input.question("valor em dinheiro pago pelo cliente: "))

//processamento 3
troco = valorpago - totaldesconto

//saida 

console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorpago.toFixed(2)}`)
console.log(`troco: R$ ${troco.toFixed(2)}`)
console.log("-----------------------------------------")
