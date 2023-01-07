// Exercício 1:
// Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
// 🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. Lembre-se: para que a variável respeite o escopo, ela não deve ser acessível fora do escopo em que esteja sendo declarada.
// Copie o código abaixo e rode-o para verificar sua saída:

// function imprimeIdade() {
//   for (var idade = 30; idade <= 40; idade += 1) {
//     console.log('Idade dentro do for:', idade)
//   }
//   console.log('Idade fora do for:', idade) // retire essa linha ao implementar o tipo de variável correta.
// }
// imprimeIdade()

function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade();

// Exercício 2:
// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// Copie o código abaixo e rode-o para verificar sua saída:

//   // Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
//   const pessoa = {
//     nome: 'Henri',
//     idade: 20
//   }
//   pessoa = {
//     nome: 'Luna',
//     idade: 19
//   } // Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

  const pessoa = {
    nome: 'Henri',
    idade: 20
  }
  pessoa.nome = 'luna';
  pessoa.idade = 19;
  console.log('Nome:', pessoa.nome);
  console.log('Idade:', pessoa.idade);

// Exercício 3:
// 🚀 Modifique a variável para que não ocorra Erro;
// Copie o código abaixo e rode-o para verificar sua saída:

//   const favoriteFood = 'Lasanha';
//   favoriteFood = 'Hamburguer';
//   console.log(favoriteFood);

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);

// Exercício 4:
// 🚀 Modifique as concatenações para template literals.
// Copie o código abaixo:

//   const name = 'Adriana';
//   const lastName = 'Soares';
//   console.log('Olá' + ',' + name + ' ' + lastName + '!');
//   function soma(a,b) {
//     let resultado = a + b;
//     return resultado;
//   }
//   let a = 3;
//   let b = 5;
//   console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));

const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá, ${name} ${lastName}!`);

function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`)

// Exercçio 5:
// 🚀 Modifique a estrutura das funções a seguir para que elas sejam arrow functions;
// 🚀 Transforme a função numeroAleatorio em uma arrow function;
// Copie o código abaixo:

//   function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

const numeroAleatorio = () => {
  return Math.random()
}
console.log(numeroAleatorio());

// Exercicio 6:
// 🚀 Transforme a função hello em uma arrow function;
// Copie o código abaixo:

//   function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

const hello = (nome) => {
      return `Olá, ${nome}!`
    }
let nome = 'Ivan';
console.log(hello(nome));

// Exercício 7:
// 🚀 Transforme a função nomeCompleto em uma arrow function;
// Copie o código abaixo:

//   function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`
}
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

// Exercício 8:
// 🚀 Altere a expressão if/else utilizando ternary operator;
// Copie o código abaixo:

//   let speed = 90;
//   const speedCar = (speed) => {
//     if (speed >= 120) {
//       return `Você ultrapassou o limite de velocidade`;
//     } else {
//       return `Você está na velocidade permitida`;
//     }
//   };
//   console.log(speedCar(speed));

let speed = 90;
const speedCar = (speed) => {
  return (
    speed >= 120
    ? `Você ultrapassou o limite de velocidade`
    : `Você está na velocidade permitida`
  )
};
console.log(speedCar(speed));

// Exercício 9:
// 🚀 Crie uma função que ligue e desligue um motor de um carro.
// Crie uma variável para armazenar o valor de status do seu motor (lembre-se de armazenar o tipo de variável da forma correta);
// Crie a função ligarDesligar utilizando arrow functions. Ela não receberá nenhum parâmetro;
// Crie a lógica para ligar e desligar o motor (a lógica deverá utilizar uma condicional para ligar e desligar o motor);
// Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
let motorLigado = false;

const ligarDesligarMotor = () => {
  if (motorLigado === false) {
    motorLigado = true;
    console.log(`O motor está ligado`)
  } else {
    motorLigado = false
    console.log(`O motor está desligado`)
  }
}

ligarDesligarMotor();
ligarDesligarMotor();
ligarDesligarMotor();
ligarDesligarMotor();

// Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator.

let motorLigado = false;

const ligarDesligarMotor = () => {
  motorLigado ? motorLigado = false : motorLigado = true;
  motorLigado ? console.log(`O motor está ligado`) : console.log(`O motor está desligado`)
}

ligarDesligarMotor();
ligarDesligarMotor();
ligarDesligarMotor();
ligarDesligarMotor();

// Exercício 10:
// 🚀 Crie uma função que calcule a área de um círculo.
// Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
// Com base nessa informação:
// Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
// Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
// Crie a lógica para retornar a área do círculo;
// Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento).
// Exemplo de retorno:
// Parâmetro: 3
// Retorno: Essa é a área do círculo: 28.259999999999998
// Parâmetro: 5
// Retorno: Essa é a área do círculo: 78.5

const circleArea = (r) => {
  const pi = 3.14
  return pi * (r ** 2);
};

console.log(`Essa é a área do circulo ${circleArea(5)}`);

// Exercício 11:
// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
// Exemplo:
//   longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

const phrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const longestWord = (phrase) => {
  const words = phrase.split(" ");
  let longestWord = words[0];
  for (let index = 1; index < words.length; index += 1) {
    if(longestWord.length < words[index].length) {
      longestWord = words[index]
    }
  }
  return longestWord;
}

console.log(longestWord(phrase));

// Bônus (opcional): Tente fazer o mesmo exercício utilizando o método array.sort().

// EXERCÍCIO BÔNUS:
// Crie duas funções JavaScript com as seguintes especificações:
// Não se esqueça de usar template literals

// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
// O nome da função deverá ser substituaX;
// A função deverá receber um nome por parâmetro;
// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
// Exemplo:
// Parâmetro: ‘Bebeto’
// Retorno: ‘Tryber Bebeto aqui!’
// Spoiler: O método split() pode ser utilizado de diferentes maneiras, como para separar as palavras de um texto.

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
// O nome da função deverá ser minhasSkills;
// A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
// Declare dentro da função uma variável com o nome skills, do tipo const;
// A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.
// Exemplo de retorno:
// Tryber Bebeto aqui!
// Minhas três principais habilidades são:
// JavaScript
// HTML
// CSS












