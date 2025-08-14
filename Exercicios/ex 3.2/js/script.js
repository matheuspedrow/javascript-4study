/*
Exercício 3.2
Faça um programa que leia três números e exiba o maior entre eles.
*/

function encontraMaiorNumero(num1, num2, num3) {
    // Usa encadeamento de ternários para escolher o maior valor
    const maior = (num1 >= num2 && num1 >= num3)
        ? num1
        : (num2 >= num1 && num2 >= num3)
            ? num2
            : num3;
    console.log("O maior número é:", maior);
}

// Testes gerados pelo ChatGPT
encontraMaiorNumero(3, 1, 2);  // Esperado: "O maior número é: 3"
encontraMaiorNumero(10, 5, 8);  // Esperado: "O maior número é: 10"
encontraMaiorNumero(-1, 0, 1);  // Esperado: "O maior número é: 1"
encontraMaiorNumero(100, 50, 75);  // Esperado: "O maior número é: 100"
encontraMaiorNumero(5, 5, 5);  // Esperado: "O maior número é: 5"
encontraMaiorNumero(-3, -1, -2);  // Esperado: "O maior número é: -1"
encontraMaiorNumero(0, 100, 50);  // Esperado: "O maior número é: 100"
encontraMaiorNumero(1, 1, 0);  // Esperado: "O maior número é: 1"
