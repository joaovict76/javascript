/**
 * Fundamentos POO
 * Encapsulamento (segurança)
 * @author João Victor
 *
 */

console.clear()

class User {
    //atributos
    constructor(login, senha) {
        this.login = login
        //Encapsulamento (O _ "underline" enjula a variavel)
        let _senha = senha
        this.getSenha = () => _senha //leitura
        this.setSenha = (novaSenha) => _senha = novaSenha //escrita
    }
    //metodo
    logar() {
        console.log("----------------")
        console.log(`usuario: ${this.login}`)
        console.log(`senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senac') {
            console.log("Usuario autenticado")
        } else {
            console.log("Usuario e/ou senha invalido(s)")
        }
    }
}

/***Sistema ****/
//criando um novo objeto 
const user1 = new User("admin", "1234")
user1.logar()
user1.setSenha("123@senac")
user1.logar()
