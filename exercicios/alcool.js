/**
 * calculo de alcool e gasolina
 * @author João Victor
 */

const input = require ('readline-sync')
const colors = require ('colors')


//variaveis 
let alcool, gasolina, diferenca

console.clear()
console.log("calculo da media aritmetica de 3 numeros")

//entrada 
// no console entradas(inoput) numericas precisam ser convertidas com uso do metodo Number()
alcool = Number(input.question("digite o valor do alcool em R$: "))
gasolina = Number(input.question("digite o valor da gasolina em R$:"))

//processamento
diferenca = (alcool / gasolina)

// saida 
console.log(`diferença: ${diferenca.toFixed(2)}`)
if (diferenca < 7) {
    console.log("alcool".red)
}else{
    console.log("gasolina".blue)

} 