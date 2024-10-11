/**
 * Media Escolar
 * @author João Victor
 */

const input = require ('readline-sync')
const colors = require ('colors')


//variaveis 
let num1, num2, num3, media

console.clear()
console.log("calculo da media aritmetica de 3 numeros")

//entrada 
// no console entradas(inoput) numericas precisam ser convertidas com uso do metodo Number()
num1 = Number(input.question("digite o primeiro numero:"))
num2 = Number(input.question("digite o segundo numero:"))
num3 = Number(input.question("digite o terceiro numero:"))

//processamento
media = (num1 + num2 + num3) / 3

// saida 
console.log(`media: ${media.toFixed(1)}`)
if (media < 5) {
    console.log("Reprovado".red)
}else{
    console.log("Aprovado".blue)

} 