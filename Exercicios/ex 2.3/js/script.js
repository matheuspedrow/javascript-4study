/*
Exercício 2.3
Precisamos limitar as posições em que um inimigo pode 
andar na tela. A menor posição possível é 0 e a maior, 
100: qualquer valor maior que 100 ou menor que 0 sairia 
fora da tela. Precisamos de uma função LimitaPosicao 
que recebe uma POSICAO que pode ter qualquer valor 
positivo ou negativo, verifica se ela é válida ou não 
e retorna sempre um valor corrigido entre 0 e 100.
*/

function limitaPosicao (posicao) 
{
    // Se fora do intervalo [0, 100], corrige usando módulo e ajuste para negativos
    if (posicao > 100 || posicao < 0)
    {
        console.log("Esta posição é INVÁLIDA!!!");
        /* Estratégia: usar o resto da divisão por 100 para trazer ao intervalo
           e, se negativo, somar 100 para ficar entre 0 e 100. */
        let valorCorrigido = posicao % 100;
        valorCorrigido = valorCorrigido < 0 ? valorCorrigido + 100 : valorCorrigido;
        console.log("Sua posição corrigida é:");
        return valorCorrigido;
    } 
    // Caso já seja válida, apenas informa e retorna o valor original
    console.log("POSIÇÃO VÁLIDA!!!");
    console.log("Posição: ", posicao);
    return posicao;
}

// Testes gerados pelo ChatGPT
console.log(limitaPosicao(0));  // Esperado: 0
console.log(limitaPosicao(100));  // Esperado: 100
console.log(limitaPosicao(198));  // Esperado: 98
console.log(limitaPosicao(-148));  // Esperado: 52
console.log(limitaPosicao(62));  // Esperado: 62
console.log(limitaPosicao(665));  // esperado: 65
console.log(limitaPosicao(-1));  // esperado: 99
console.log(limitaPosicao(-354));  // esperado: 46

