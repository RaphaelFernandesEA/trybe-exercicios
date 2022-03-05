//#Exercicios Dia 03 Bloco 04
//1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let fatorial10 = 1; 
for(let index = 10; index > 0; index -= 1){
    fatorial10 *= index;
}
console.log(fatorial10);

//2 - Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = "tryber";

let anagrama = [];

for (index = word.length-1; index >=0 ; index -=1){
    anagrama.push(word[index]);
}
console.log(anagrama); 

//                      ##### MELHORAMENTO ABAIXO #######

let word = "roma";
let anagrama = "";
for (index = word.length-1; index >=0; index -=1){
    anagrama += word[index];
}
console.log(anagrama);

//3 - Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let maiorPalavra = array[0];
for (let index = 1; index < array.length; index += 1){
    if (maiorPalavra.length < array[index].length){
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);

let menorPalavra = array[0];
for (let index = 1; index < array.length; index += 1){
    if (menorPalavra.length > array[index].length){
        menorPalavra = array[index];
    }
}
console.log(menorPalavra);

//4 - Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let maiorPrimo = 0;
for (let num = 1; num <= 50; num += 1){
    let numPrimo = true;
    for (let num2 = 2; num2 < num; num2 += 1){
        if (num % num2 === 0){
        numPrimo = false;
        }
    }
    if (numPrimo){
        maiorPrimo = num;
    }
}
console.log(maiorPrimo);

//EXERCÍCIOS BÔNUS 01:

// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5

// *****
// *****
// *****
// *****
// *****

let n = 04;
let linha = '';
let symbol = '*'
// let symbol = '*  '
for (let index = 1; index <= n; index += 1) {
  linha = linha + symbol;
}
for (let index = 1; index <= n; index += 1) {
  console.log(linha);
}

//EXERCÍCIO BÔNUS 02:

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n = 05;
let linha = '';
let symbol = '*'
for (let index = 1; index <= n; index += 1) {
  linha = linha + symbol;
  console.log(linha);
}

//EXERCÍCIO BÔNUS 03:

// 3- Agora inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

// Atenção! Note que esse exercício é bem mais complexo que o anterior! Não basta, aqui, imprimir somente asteriscos. Você precisará de uma lógica para imprimir espaços também.











