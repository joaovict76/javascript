/**
 * calculo do volume de um aquari 
 * @author João Victor 
 */

const input = require ('readline-sync')

// variaveis 
let comprimento, largura, altura, volume

console.clear()
console.log("calculo do volume d um aquario")


//entrada
comprimento = Number(input.question("Digite o comprimento em cm: "))
largura = Number(input.question("Digite a largura em cm: "))
altura = Number(input.question("Digite a altura em cm: "))

//processamento 
volume = (comprimento * largura * altura) / 1000

// saida 
console.log(`Volume do aquario: ${volume.toFixed(2)} litros`)