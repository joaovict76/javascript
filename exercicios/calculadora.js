/**
 * Desenvolvimento de um calculadora
 * @author João Victor
 */

const input = require ('readline-sync')

let a, b, opcao
do {
console.clear()
console.log("calculadora")
console.log("")
console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")
console.log("")
a = Number(input.question("Digite o primeiro Numero: "))
b = Number(input.question("Digite o segundo numero: "))
console.clear()
console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Mulitipicar")
console.log("4. Dividir")
console.log("5. porcentagem")
opcao = Number (input.question("Digite a opcao desejada: "))

console.log("")
function somar (a, b){
 
     return console.log(`A soma de ${a} = ${b} = ${a + b}`) 
}
function subtracao (a, b){

    return  console.log(`A subtracao de ${a} - ${b} = ${a - b}`)
}
function Mulitipicacao (a, b){
    return console.log(`A Mulitipicacao de ${a} x ${b} = ${a * b}`)
}
function Divisao (a, b){
    return console.log(`A Divisao de ${a} /  ${b} = ${a / b}`)
}
function porcentagem(a, b){
    return  console.log(`${b}% de ${a} = ${(b * a) / 100}`)   

}


switch (opcao){
    case 1:
        somar(a,b)
        break
    case 2:
        subtrair(a,b)    
        break
    case 3:
        Mulitipicacao(a,b)
        break
    case 4:
        Divisao(a,b)
        break
    case 5:
        porcentagem(b,a)        
        break 
}
opcao = input.question("Deseja calcular nivamente: (S/N) ")
} while (opcao === 's');


