/**
 * Input de dados via terminal
 * Uso do pacote read-line-sync
 * @author João Victor
 */

// importar o pacote
const input = require('readline-sync')

let nome

console.clear()

nome = input.question("Digite seu nome: ")
console.log(`Hello ${nome}`)
