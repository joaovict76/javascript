/**
 * Regra de 3
 * @author João Victor 
 */

//variaveis 
const input = require('readline-sync')

let x, y, valor 

console.clear() 
console.log("Regra de 3")
console.log("x% de y = valor")


//entrada

x = Number(input.question("valor de x: "))
y = Number(input.question("valor de y: "))

//processamento
valor = (x*y) / 100

//saida
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)


