# Exercícios em Javascript (para iniciantes em programação)

exercicios-javascript — é para você que gostaria de aprender programação, não sabe nada ainda e quer iniciar direto na prática utilizando a linguagem JavaScript.

A motivação inicial foi numa tentativa de ensinar minha namorada a programar.

# Índice

   * [Exercícios em Javascript (para iniciantes em programação)](#exercícios-em-javascript-para-iniciantes-em-programação)
   * [Índice](#índice)
   * [Antes de qualquer coisa](#antes-de-qualquer-coisa)
      * [Abrindo o DevTools](#abrindo-o-devtools)
      * [Abrindo o <em>console</em> no codepen.io](#abrindo-o-console-no-codepenio)
   * [Exercícios](#exercícios)
      * [Variáveis e Funções](#variáveis-e-funções)
         * [Exercício 1.1](#exercício-11)
         * [Exercício 1.2](#exercício-12)
         * [Exercício 1.3](#exercício-13)
         * [Exercício 1.4](#exercício-14)
   * [2. Condicionais (<em>if</em>, <em>else</em>)](#2-condicionais-if-else)
         * [Exercício 2.1](#exercício-21)
         * [Exercício 2.2](#exercício-22)
         * [Exercício 2.3](#exercício-23)
      * [3. Lógica](#3-lógica)
         * [Exercício 3.1](#exercício-31)
         * [Exercício 3.2](#exercício-32)
         * [Exercício 3.3](#exercício-33)
      * [4. Loop](#4-loop)
         * [Exercício 4.1](#exercício-41)
      * [5. Vetores (array)](#5-vetores-array)
         * [Exercício 5](#exercício-5)
   * [Respostas](#respostas)
   * [Outras ferramentas para iniciar na programação](#outras-ferramentas-para-iniciar-na-programação)
   * [Referências](#referências)


# Antes de qualquer coisa

Antes de iniciar, precisamos de boas ferramentas para iniciar nossos trabalhos. O "feijão com o arroz" pra mim são as seguintes ferramentas:

 - DevTools, que está dentro do próprio navegador Chrome (apertando a tecla 'F12', na tela do navegador)

 - codepen.io, que é muito bacana também mas que precisa estar online e conectado a Internet pra usar.


## Abrindo o DevTools

(preciso escrever algo sobre console)

## Abrindo o *console* no codepen.io

(preciso escrever algo sobre console)

# Exercícios

## Variáveis e Funções

### Exercício 1.1

Faça um programa que **exiba** 3 números na tela.

Dica - exibindo (ou "imprimindo") números na tela:

```javascript
const a = 23;
console.log(a);
```

### Exercício 1.2

Faça um programa que **leia** 3 números e **exiba** a soma na tela.

Dica - lendo números:
```javascript
// prompt retorna string; converta para número quando for calcular
const n1 = parseFloat(prompt('Digite um número:'));
const n2 = parseFloat(prompt('Digite outro número:'));
const n3 = parseFloat(prompt('Digite o último número:'));
console.log(n1 + n2 + n3);
```

### Exercício 1.3

Faça um programa que **leia** 3 números, **some**-os e **exiba** a média entre eles.

Dica:
```
A média entre dois números é a soma dos dois números dividida por 2
A média entre três números é a soma dos três números dividida por 3
A média entre 'n' números é a soma dos 'n' números dividida por 'n'
```

### Exercício 1.4

Faça um programa que leia do usuário uma temperatura em Fahrenheit, converta-a para graus Celsius e escreva o novo valor na tela. A fórmula de conversão de Fahrenheit (F) para Celsius é C = ( ( F - 32 ) * 5 ) / 9. Exemplo: 100 Fahrenheit = 37,77 Celsius.

## 2. Condicionais (_if_, _else_)

Observação: nesta lista utilizaremos preferencialmente o operador ternário (`condicao ? valorSeVerdadeiro : valorSeFalso`) no lugar de `if/else` para decisões simples.

### Exercício 2.1 

Faça um programa que leia 2 números, some-os e exiba uma mensagem com o resultado apenas **se** o resultado for maior que 100.

Dica:
```javascript
const n1 = parseFloat(prompt('Digite o primeiro número:'));
const n2 = parseFloat(prompt('Digite o segundo número:'));

isNaN(n1) || isNaN(n2)
  ? alert('Por favor, digite números válidos.')
  : (
      soma = n1 + n2,
      soma > 100
        ? alert(`A soma dos números é ${soma}, que é maior que 100.`)
        : alert(`A soma dos números é ${soma}, que é menor ou igual a 100.`)
    );
```


### Exercício 2.2

Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. Nesta lista, a função deve retornar a string "Morreu" se `dano >= saude` e "Vivo" caso contrário.

Dica - utilize a seguinte função:
```javascript
function personagemMorreu(dano, saude) {
  return dano >= saude ? 'Morreu' : 'Vivo';
}
```

### Exercício 2.3

Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função `limitaPosicao` que recebe uma posição (valor positivo ou negativo), verifica se ela é válida ou não e retorna sempre um valor entre 0 e 100. Dica: use o operador de módulo (`%`) e ajuste valores negativos.

Dica - utilize a seguinte função:
```javascript
function limitaPosicao (posicao) {
  // código da função
}
```

## 3. Lógica

### Exercício 3.1

Faça um programa que leia um número e verifique se ele é par ou ímpar. Exiba uma mensagem indicando o resultado.

Dica - Use o operador de módulo (%) para verificar se um número é divisível por 2 e um operador ternário para decidir a mensagem.

```javascript
function verificaParOuImpar(numero) {
  numero % 2 === 0 ? console.log(numero + ' é par') : console.log(numero + ' é ímpar');
}
```

### Exercício 3.2

Faça um programa que leia três números e exiba o maior entre eles.

Dica - Você pode usar ternários encadeados ou `Math.max` para determinar o maior número.

```javascript
function encontraMaiorNumero(num1, num2, num3) {
  const maior = (num1 >= num2 && num1 >= num3) ? num1 : (num2 >= num1 && num2 >= num3) ? num2 : num3;
  console.log('O maior número é:', maior);
}
```

### Exercício 3.3

Faça um programa que leia um número e determine se ele é positivo, negativo ou zero.

Dica - Utilize operadores ternários encadeados para cobrir positivo, negativo e zero.

```javascript
function verificaNumero(numero) {
  numero > 0 ? console.log(numero + ' é positivo') : numero < 0 ? console.log(numero + ' é negativo') : console.log(numero + ' é zero');
}
```

## 4. Loop

### Exercício 4.1

Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário.

## 5. Vetores (array)

### Exercício 5.1
Faça um programa que leia um vetor numérico de 10 posições. Depois, percorra o vetor e exiba o maior valor encontrado.

Dica:
```javascript
const vet = [10];
let p = 0;
while (p < 10) {
  vet[p] = parseFloat(prompt('Digite um número:'));
  p = p + 1;
}

let maior = vet[0];
let i = 0;
while (i < vet.length) {
  maior = vet[i] > maior ? vet[i] : maior;
  i = i + 1;
}
console.log('Maior número encontrado no vetor é:', maior);
```

# Respostas

Ficaria muito grato em receber respostas, correções enviadas por email ou, melhor ainda, [abrindo um "pull request"](https://github.com/tiagovignatti/exercicios-javascript/pulls) por aqui.

Agradeço @SamuelSilvaB, @madruga0, @Thiagomuniz012 que já fizeram algumas excelentes contribuições:
- https://github.com/tiagovignatti/exercicios-javascript/pull/4
- https://github.com/tiagovignatti/exercicios-javascript/issues/2
- https://github.com/tiagovignatti/exercicios-javascript/pull/5 (EXCELENTE EXEMPLO DE CONTRIBUIÇÃO!)

# Outras ferramentas para iniciar na programação

[Glitch](glitch.com)
 
[Rocketseat](rocketseat.com.br)

[VSCode](https://code.visualstudio.com/)

Chrome browser and DevTools

# Referências

https://github.com/progweb2sem2014/repodidatico/wiki/Exerc%C3%ADcios-de-Javascript-(05-09)

https://github.com/gabrieldarezzo/helpjs-ravi

http://professor.leonardomeirelles.com/wp/lista-de-exercicios-javascript/

https://www.guj.com.br/t/exercicios-com-javascript/323892
