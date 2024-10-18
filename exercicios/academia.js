/**
 * Ficha de aluno de academia 
 * @author João Victor
 */


const input = require('readline-sync')
const colors = require('colors')

//variaveis
let nome 
let idade
let peso 
let altura 
let fcm
let imc
let consumo 

console.clear()


console.log("  ▄▀▀▄ ▄▄   ▄▀▀█▄▄▄▄  ▄▀▀█▄   ▄▀▀▀█▀▀▄  ▄▀▀▄ ▄▄       ▄▀▄▄▄▄   ▄▀▀█▄   ▄▀▀▀▀▄     ▄▀▄▄▄▄   ▄▀▀▄ ▄▀▀▄  ▄▀▀▀▀▄      ▄▀▀█▄   ▄▀▀▀█▀▀▄  ▄▀▀▀▀▄   ▄▀▀▄▀▀▀▄   ")
console.log("  █  █   ▄▀ ▐  ▄▀   ▐ ▐ ▄▀ ▀▄ █    █  ▐ █  █   ▄▀     █ █    ▌ ▐ ▄▀ ▀▄ █    █     █ █    ▌ █   █    █ █    █      ▐ ▄▀ ▀▄ █    █  ▐ █      █ █   █   █  ")
console.log("  ▐  █▄▄▄█    █▄▄▄▄▄    █▄▄▄█ ▐   █     ▐  █▄▄▄█      ▐ █        █▄▄▄█ ▐    █     ▐ █      ▐  █    █  ▐    █        █▄▄▄█ ▐   █     █      █ ▐  █▀▀█▀   ")
console.log("     █   █    █    ▌   ▄▀   █    █         █   █        █       ▄▀   █     █        █        █    █       █        ▄▀   █    █      ▀▄    ▄▀  ▄▀    █       ")
console.log("    ▄▀  ▄▀   ▄▀▄▄▄▄   █   ▄▀   ▄▀         ▄▀  ▄▀       ▄▀▄▄▄▄▀ █   ▄▀    ▄▀▄▄▄▄▄▄▀ ▄▀▄▄▄▄▀    ▀▄▄▄▄▀    ▄▀▄▄▄▄▄▄▀ █   ▄▀   ▄▀         ▀▀▀▀   █     █        ")
console.log("   █   █     █    ▐   ▐   ▐   █          █   █        █     ▐  ▐   ▐     █        █     ▐               █         ▐   ▐   █                  ▐     ▐       ")
console.log("  ▐   ▐     ▐                ▐          ▐   ▐        ▐                  ▐        ▐                     ▐                 ▐                                ")
   
console.log("")

// entrada de dados 
nome = input.question("Digite seu nome: ")
idade = Number(input.question("Digite sua idade: "))
peso = Number(input.question("Digite seu peso em(kg): "))
altura = Number(input.question("Digite sua altura em (metros): "))

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

//saida 
console.log("Ficha do aluno")
console.log("______________________")
console.log(`nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

//IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25){
    console.log("Peso Normal".green)
} else if (imc < 30){
    console.log("Um pouco acima do peso".yellow)
} else if (imc < 35){
    console.log("obesidade Grau I".magenta)
} else if (imc < 40){
    console.log("obesidade Grau II (severa)".red)
} else{
    console.log("obesidade Grau III (morbida)".bgRed)
}

console.log(`consumo por dia${consumo.toFixed(3)}litros de agua: `)