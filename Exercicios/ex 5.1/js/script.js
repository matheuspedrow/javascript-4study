/*
Exercício 5
Faça um programa que leia um vetor numérico de 10 
posições. Depois, ordene o vetor em ordem crescente 
e apresente os elementos ordenados.
*/

// Vetor para armazenar 10 números informados pelo usuário
const vet = [10]
let p = 0; // let pois será incrementado no laço

while (p < 10) 
{
    const addVet = parseFloat(prompt("Qual numero deseja colocar no vetor: "));
    vet[p] = addVet;
    p = p + 1;

}

let maior = vet[0];
let i = 0;

while (i < vet.length - 1)
{
    // Atualiza 'maior' usando ternário ao comparar elementos
    maior = vet[i] > maior ? vet[i] : maior;
    i = i + 1;
}

console.log(vet)
console.log("maior número encontrado no vetor é:", maior);
