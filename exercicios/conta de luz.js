/**
 * calculo da conta de luz
 * @author João Victor
 */

function calcularContaLuz(consumoKwh, tarifaPorKwh) 
{
// Calcula o valor da conta de luz
 return consumoKwh * tarifaPorKwh;
}

function main() {
const readline = require('readline').createInterface({
 input: process.stdin,
 output: process.stdout
});

 // Solicita o consumo em kWh
readline.question('Informe o consumo de energia (em kWh): ', (consumoInput) => {
const consumoKwh = parseFloat(consumoInput);

 // Solicita o valor da tarifa por kWh
 readline.question('Informe o valor da tarifa por kWh (em R$): ', (tarifaInput) => {
 const tarifaPorKwh = parseFloat(tarifaInput);

 // Calcula o valor da conta
const valorConta = calcularContaLuz(consumoKwh, tarifaPorKwh);

 // Exibe o resultado
console.log(`O valor da conta de luz é: R$ ${valorConta.toFixed(2)}`);

 // Fecha a interface de leitura
readline.close();
});
});
}

// Executa o programa
main();