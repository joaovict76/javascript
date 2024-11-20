/**
 * estruturas de dados e objetos
 * @author João Victor
 */

console.clear()

const funcionario1 = {}
console.log(typeof (funcionario1))

//adicionar dados a estrutura
funcionario1.nome = "João"
funcionario1.cargo = "jogador de tigrinho"
funcionario1.email = "joaovictoorree@gmail.com"
funcionario1.salario = 10000
funcionario1.insta = "@__joao3"
//listar os dados da estrutura 
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estrutura
funcionario1.nome = "João Victor"
console.log(funcionario1)
//excluir os dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    Nome: "Bruce Wayne",
    Cargo: "CEO",
    Email: "batman@gmail.com",
    Salario: 400000
}

console.log(funcionario2)

const endereco1 = {
    Logradouro: "Bat Caverna",
    Cidade: "Gothan City",
    Estado: "Nova Jersey"
}

console.log(endereco1)

const funcionario3 = {
    Nome: "Alfred pennywort",
    Cargo: "Mordomo",
    Email: "alfred@gmail.com",
    Salario: 1300,
    ...endereco1
}

console.log(funcionario3)

const funcionario4 = {
    Nome: "Dick Grayson",
    Cargo: "Acrobata",
    Email: "robin@gmail.com",
    Salario: 21300,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    Nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gamil.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    suitUP: () => {
        console.log("👺")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suitUP
