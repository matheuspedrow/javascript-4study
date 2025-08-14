/*
Exercício 4.1
Escreva um programa que calcule e mostre a tabuada 
(até 10x) de um número qualquer, digitado pelo usuário.
*/

const num = parseFloat(prompt("Digite o número da taboada: "));
let count = 0; // let porque será reatribuído a cada iteração

while (count < 10 ) 
{
    console.log(num + " X " + (count + 1) + " = " + num * (count + 1));
    count = count + 1;
}