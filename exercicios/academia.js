/**
 * Ficha de aluno de academia 
 * @author João Victor
 */

//variaveis
let nome 
let idade
let peso 
let altura 
let vip

console.clear()

// entrada de dados 
nome = "joão Victor"
idade = 20 
peso = 140
altura = 1.76
vip = true 

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
//saida 
console.log("Ficha do aluno")
console.log("______________________")
console.log(`nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`vip: ${vip}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

//IMC
if (imc < 18.5) {
    console.log("Abaixo do peso")
} else if (imc < 25){
    console.log("Peso Normal")
} else if (imc < 30){
    console.log("Um pouco acima do peso")
} else if (imc < 35){
    console.log("obesidade Grau I")
} else if (imc < 40){
    console.log("obesidade Grau II (severa)")
} else{
    console.log("obesidade Grau III (morbida)")
}