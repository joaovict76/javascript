/**
 * Assincronismmo 
 * Promiss
 * @author João Victor
 */

const input = require('readline-sync')

let login, senha

// estrutura de dados (simular um banco de dados)
const database = {
    admin: {
        usuario: "Adiministrador", 
        senha: "password"
    },
    Eu: {
        usuario: "Joao Victor", 
        senha: "123456"
    }
}

// Autenticação de usuario
console.clear()
console.log("-----------------------")
console.log("       Usuario         ")
console.log("-----------------------")
login = input.question("login: ")
senha = input.question("senha: ")
console.log("-----------------------")

function logar(login, senha) {
    //uso de promise (acesso ao "banco de dados")
    return new Promise((resolv, reject) => {
        //simulação de delay no acesso ao banco 
        setTimeout(() => {
            //se existir no banco de dados o usuario 
            if(database.hasOwnProperty(login)) {
                //verfique se a senha estiver correta
                if(database[login].senha === senha ){resolv("Autenticação bem sucedida. Ola, " + database[login].usuario)
                } else {
            reject("Senha incorreta. Por favor tente novamente.")
                }
            }else {
                reject("Usuario nao encontrado. Por favor, verifique o login")
            }
        }, 2000)

    })
}

//executar a função logar
//novo uso de promissse é necessario usa  o .then
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log("Erro de autenticação. " + error)
    })
