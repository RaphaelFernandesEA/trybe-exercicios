// //PARTE II
// //EXERCÍCIO 01

// // Crie uma função que receba um número e retorne seu fatorial.
// // Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// // Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// const fatorial = (n) => {
//     let fatorial = n
//     for (let index = n-1; index > 0; index -= 1) {
//         fatorial *= index;
//     }
//     console.log(fatorial);
// }
// fatorial(6);

// //Bônus:

const fatorial = (n) => n > 1 ? n * fatorial(n - 1) : 1;
console.log(fatorial(4));

// //EXERCÍCIOS 2

// // Crie uma função que receba uma frase e retorne qual a maior palavra.
// // Exemplo:
// //       longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const longestWord = (string) => {
    let phrase = (string.split(' '));
    let longestWord = [phrase[0]];
    for (let index = 1; index < phrase.length; index += 1) {
        if (phrase[index].length > longestWord.length) {
            longestWord = phrase[index];
        }
    }
    console.log(longestWord);
}


longestWord('Antônio foi no banheiro e não sabemos o que aconteceu');

//EXERCÍCIO 03

// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

const button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'click';

let clickCount = 0;

let p = document.createElement('p');
document.body.appendChild(p);

button.addEventListener('click', FclickCount);

function FclickCount(event){
    clickCount += 1
    p.innerText = clickCount;
    // console.log(clickCount);
}

//Melhoramento

button.addEventListener('click', () => p.innerText = clickCount += 1);

//EXERCÍCIO 4

// Crie um código JavaScript com a seguinte especificação: (Não se esqueça de usar template literals)

// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"

// let parametro = 'Bebeto';
// let string = 'Tryber x aqui!';
const replaceWord = (parametro, string) => console.log(string.replace('x', parametro));

// replaceWord(parametro,string);
replaceWord('Bebeto', 'Tryber x aqui!');

//Fonte: https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176

// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

const array = ['HTML', 'CSS', 'JS', 'DOM', 'React'];

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".

const saudacao = (replaceWord, array) => console.log(`${replaceWord} Minhas cinco principais habilidade são: ${array.sort()}`);
saudacao(replaceWord('Bebeto', 'Tryber x aqui!'), array);


