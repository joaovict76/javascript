/**
 * Verificar maioridade
 * @author João Victor
 */

const input = require ('readline-sync')

console.clear()
console.log("Verificar maioridade")
idade = Number(input.question("Digite a idade: "))
console.log(`idade: ${idade}`)
if (idade < 18) {
    console.log("Menor de idade")
}

if (idade >= 18) {
    console.log("Maior de idade")
}


