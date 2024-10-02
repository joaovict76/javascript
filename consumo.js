/**
 * calculo do consumo de combustivel 
 * @author João Victor
 */


//variaves
const input = require('readline-sync')

let distancia, litros, consumo

console.clear
console.log("calculo do consumo de combustivel")

//entrada 

distancia = Number(input.question("Distancia percorrida em km: "))
litros = Number(input.question("Digite os litros gastos: "))

//processamento 

consumo = (distancia / litros)

//saida 

console.log(`consumo gasto: ${consumo.toFixed(1)} Km/L`)

