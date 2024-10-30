/**
 * Estudo das Funções com paramentos e retorno
 * @author João Victor
 */

function somar(a, b) {
    return (console.log(a + b))
}

somar(5, 2)

const somarA = function (a, b) {
    return (console.log(a + b))
}

somarA(5, 3)

function somarAF(a, b) {
    return (console.log(a + b))
}

somarAF(2, 2)

// Na função abaixo o retorno e implicito 
const somarAFS = (a, b) => console.log(a + b)
somarAFS(3, 9)