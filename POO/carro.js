/**
 * Carro e Aviao
 * @author João Victor 
 */



console.clear();


class Carro {
    constructor(marca, modelo, ano, cor, ligado) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
        this.ligado = ligado
    }

    criarCarro() {
        console.log("------------------------------------");
        console.log("Carro criado!");
        console.log(`Marca: ${this.marca}`)
        console.log(`Modelo: ${this.modelo}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`cor: ${this.cor}`)
    }

    ligar() {
        
            console.log(`O carro ${this.modelo} foi ligado!`);
        
    }

    desligar() {
     console.log(`O carro ${this.modelo} foi desligado!`);
        }
   

    acelerar() {
      console.log(`O carro ${this.modelo} esta acelerando`)

    }
}
class Aviao extends Carro {
    constructor(modelo, envergadura) {
        super(modelo)
        this.envergadura = envergadura
    }

 criarAviao(){
    console.log("-----------------------------")
    console.log("aviao criado!")
    console.log(`Modelo: ${this.modelo}`)
    console.log(`envergadura: ${this.envergadura}`)
 }

 acelerar() {
    console.log("Aviao Acelerando")
    }
aterrizar() {
    console.log("Aviao aterrizando")
}

}
const carro1 = new Carro("Toyota", "Corolla", 2022, "branco");
carro1.criarCarro();
carro1.ligar();
carro1.acelerar();
carro1.desligar();

const carro2 = new Carro("Volkswagen", "Fox", 2008, "vermelho");
carro2.criarCarro();
carro2.ligar();
carro2.acelerar();
carro2.desligar();



const aviao1 = new Aviao("embraer", "27,05 metros");
aviao1.criarAviao();
aviao1.acelerar();
aviao1.aterrizar();


