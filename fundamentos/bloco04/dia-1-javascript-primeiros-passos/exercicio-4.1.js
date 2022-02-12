//1-  Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 26;
const b = 4;
// Adição:
let adicao = a + b;
console.log(adicao);

//subtração:

let subtracao = a - b;
console.log(subtracao);

//Multiplicação:

let multiplicacao = a * b;
console.log(multiplicacao);

//Divisão:

let divisao = a / b;
console.log(divisao);

//Módulo:

let modulo = a % b;
console.log(modulo);

//2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const number1 = 27;
const number2 = 42;
if(number1 > number2){
    console.log(number1);
}
else if (number2 > number1){
    console.log(number2);
} else {
    console.log("Números iguais");
}
//3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const number1 = 27;
const number2 = 25;
const number3 = 12;
if(number1 > number2 && number1 > number3){
    console.log(number1);
} else if(number2 > number1 && number2 > number3){
    console.log(number2);
}else {
    console.log(number3);
}
//4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const numero = 0;
if(numero > 0){
    console.log("positive");
} else if(numero < 0){
    console.log("nagative");
} else {
    console.log("zero");
}
// 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
const a = 80;
const b = 70;
const c = 30;
if(a < 0 || b < 0 || c < 0){
    console.log("Ângulo inválido");
} else if(a + b + c === 180){
    console.log(true)
} else {
    console.log(false);
}
//6 -  Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
const pecaXadrez ="Peao";
switch(pecaXadrez.toLowerCase()){
    case"peao"||"pawn":
        console.log("Movimenta apenas uma casa para frente, podendo apenas o primeiro movimento de cada peça ser de duas casa; captura de outras peças na primeira casa diagonal superior.");
        break;
    case "torre"||"rook":
        console.log("Movimenta quantas casas estiverem livres nas direções retas pelas colunas e fileiras.");
        break;
    case "cavalo"||"knight":
        console.log("Movimenta sempre em L, ou seja, duas casas para frente, para o lado ou para trás e uma para a esquerda ou direita.");
        break;
    case "bispo"||"bishop":
        console.log("Movimenta quantas casas estiverem livres pela diagonal, sendo que nunca poderá mudar a cor das casas em que se encontra, uma vez que movendo-se em diagonal, não lhe é permitido passar para uma diagonal de outra cor.");
        break;
    case "rainha"||"queen":
        console.log("Movimenta em todas as direções pela vertical, horizontal ou diagonal, quantas casas estiverem livres");
        break;
    case "rei"||"king":
        console.log("Movimenta em todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance");
        break;
    default:
        console.log(">>!!!ERRO!!!<< -Desculpe, não conheço essa peça, tente novamente... ");
}
// //7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.