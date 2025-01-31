/**
 * Uso de async - await (sintaxe moderna do JS para lidar assincronismo)
 @author Joao Victor
*/

//biblioteca nativa do Js para trabalhar com arquivos
const fs = require('fs')

function criarArquivo() {
    let conteudo = "Joao Victor\nExemplo de uso dos novos recurso do sincronismo no JS (async - await)"
    gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravado com sucesso. ")
    } catch (error) {
        console.log(error)
    }  
}
console.clear()
criarArquivo()
