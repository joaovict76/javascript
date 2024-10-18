/**
 * Exemplo de uso do metodo para gerar numeros aleatorias
 * @author João Victor
 */ 

const input = require('readline-sync')

let face 

console.clear()
console.log("Jogo do Dado")
input.question("Pressione a tecla [Enter] para jogar o dado ")

// Sorteio da face de um dado
// Math classe matematica
// floor() conversao para numeros inteiros
// random() * (gerador de numeros aleatorios)

face = Math.floor(Math.random() * 6) // 0 1 2 3 4 5 
console.log(`Face do Dado: ${face}`)