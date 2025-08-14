/*
Exercício 3.1
Faça um programa que leia um número e verifique se ele é par ou ímpar.
Exiba uma mensagem indicando o resultado.
*/

function verificaParOuImpar(numero) {
  numero % 2 === 0 ? console.log(numero + " é par") : console.log(numero + " é ímpar");
}

verificaParOuImpar(0);  // Esperado: "0 é par"
verificaParOuImpar(1);  // Esperado: "1 é ímpar"
verificaParOuImpar(2);  // Esperado: "2 é par"
verificaParOuImpar(3);  // Esperado: "3 é ímpar"
verificaParOuImpar(100);  // Esperado: "100 é par"
verificaParOuImpar(101);  // Esperado: "101 é ímpar"
verificaParOuImpar(-2);  // Esperado: "-2 é par"
verificaParOuImpar(-3);  // Esperado: "-3 é ímpar"

// Exemplo 1: número par
// 10 % 2
// Passo - Cálculo - Resultado
// Primeiro Passo - 10 / 2 = 5 exato
// Segundo Passo - 2 * 5 = 10
// Terceiro Passo - 10 - 10 = 0
// Resultado: 0 → número par.		

// Exemplo 2: número ímpar
// 7 % 2
// Passo - Cálculo - Resultado
// Primeiro Passo - 7 / 2 = 3 inteiro
// Segundo Passo - 2 * 3 = 6
// Terceiro Passo - 7 - 6 = 1
// Resultado: 1 → número ímpar.		
