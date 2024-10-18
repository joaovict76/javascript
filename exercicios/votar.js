/**
 * obrigatorio votar 
 * @author João Victor
 */

const input = require ("readline-sync")

let idade; 

console.clear
console.log("Verificar obrigatorio de voto")

idade = Number(input.question("Qual sua idade? "))

console.log(`idade ${idade}`)

if (idade < 16) {
    console.log("Proibido votar")
} else if (idade >= 16 && idade < 18 || idade > 70) {
    console.log("voto facultativo")
} else {
    console.log("voto obrigatorio")
}