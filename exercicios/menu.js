/**
 * Exemplo de uso de estrutura switch case
 * @author João Victor
 */

const input = require('readline-sync')

let opcao

console.clear()
console.log("BOOT")
console.log("Digite a opção desejada")
console.log("1.Carregar o sistema Windows")
console.log("2.Carregar o sistema Linux")

opcao = Number(input.question("Digite a opcao desejada: "))

switch (opcao) {
    case 1:
        console.clear()
    console.log("                ....iilllllllllllll")
    console.log("      ....iillll  lllllllllllllllllll")
    console.log("   iillllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("   llllllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("    llllllllllllll  lllllllllllllllllll")
    console.log("    `^^^^^^lllllll  lllllllllllllllllll")
    console.log("         ````^^^^  ^^lllllllllllllllll")
    console.log("                     ````^^^^^^llll")
        break
    case 2:
        console.clear()
        console.log("Carregando o sistema Linux............")
                   
        break 
    default:
        console.log("Opção invalida")      
}