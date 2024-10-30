/**
 * Exemplo de uso do metodo para gerar numeros aleatorias e uso da estrutura do-while
 * Jogo do dado
 * @author João Victor
 */ 

const input = require('readline-sync')

let face, opcao

do {
    console.clear()
    console.log("Jogo do Dado")
    input.question("Pressione a tecla [Enter] para jogar o dado ")
    
    // Sorteio da face de um dado
    // Math classe matematica
    // floor() conversao para numeros inteiros
    // random() * (gerador de numeros aleatorios)
    
    face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5 
    console.log(`Face do Dado: ${face}`) 

    opcao = input.question("Deseja jogar novamente(s/n) ")
} while (opcao === 's');

