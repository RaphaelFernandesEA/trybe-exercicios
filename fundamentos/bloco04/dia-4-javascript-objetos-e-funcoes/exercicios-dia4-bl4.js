//#Exercícis Bloco 04 dia 04

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

console.log("Bem vinda " + info.personagem);

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

info["recorrente"] = "sim";
console.log(info);

//3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

for (let key in info){
    console.log(key)
};

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:

for (let key in info){
    console.log(info[key])
};

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info =  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
}
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim',
}
for ( let key in info && info2){
  if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
    console.log('Ambos recorrentes');
  } else {
  console.log(info[key] + " e " + info2[key]);
  }
}
//Usando o objeto abaixo, faça os exercícios a seguir:

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
//6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

console.log("O livro favorito de " + leitor.nome + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

//7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:

leitor.livrosFavoritos[1] = {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
}
console.log(leitor);

//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")

//#EXERCÍCIOS FUNÇÔES
//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let palavra = "arara";
function epalindromo (palavra){
    let arrayPalindromo = palavra.split("");
    let arrayReverse = arrayPalindromo.reverse();
    let palindromo = arrayReverse.join("")
    if (palavra === palindromo){
        return true
    } else {
        return false
    }
}
console.log(epalindromo(palavra));

//REFERÊNCIAS:
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 
//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array = [2, 3, 6, 7, 10, 1];
function indiceDoMaior(array){
  let indiceMaior = 0;
  for (let index in array){
    if (indiceMaior < array[index]){
      indiceMaior = index;
    }
  }
  return indiceMaior
}
console.log(indiceDoMaior(array));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; 
// Valor esperado no retorno da função: 6 .

 let array = [2, 4, 6, 7, 10, 0, -3];
 function indiceDoMenor(array){
   let indeiceMenor = array[0];
   for (let indice in array){
     if (indeiceMenor > array[indice]){
       indeiceMenor = indice
     }
   }
   return indeiceMenor
 }
console.log(indiceDoMenor(array));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorNome(array) {
  let maiorNome = array[0];
  for (let index in array){
    if (maiorNome.length < array[index].length) {
      maiorNome = array[index];
    }
  }
  return maiorNome
}
console.log(maiorNome(array));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let array = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido (array) {

}

console.log(maisRepetido);

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function soma (numero) {
  let soma = 0;
  for (let index = 0; index <= numero; index += 1) {
    soma += index
  }
  return soma
}
console.log(soma(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
