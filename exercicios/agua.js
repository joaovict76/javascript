/**
 * Calculo de consumo de agua 
 * @author João Victor
 */

const input = require ('readline-sync')

let consumo, peso

console.clear

peso = Number(input.question("Digite o seu peso(em kg): "))

consumo = peso * 0.035

console.log(`Consumo diario de agua deve ser: ${consumo.toFixed(3)} litros`)