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
const pecaXadrez ="rainhA";
switch(pecaXadrez.toLowerCase()){
    case"peao":
        console.log("Movimenta apenas uma casa para frente, podendo apenas o primeiro movimento de cada peça ser de duas casa; captura de outras peças na primeira casa diagonal superior.");
        break;
    case "torre":
        console.log("Movimenta quantas casas estiverem livres nas direções retas pelas colunas e fileiras.");
        break;
    case "cavalo":
        console.log("Movimenta sempre em L, ou seja, duas casas para frente, para o lado ou para trás e uma para a esquerda ou direita.");
        break;
    case "bispo":
        console.log("Movimenta quantas casas estiverem livres pela diagonal, sendo que nunca poderá mudar a cor das casas em que se encontra, uma vez que movendo-se em diagonal, não lhe é permitido passar para uma diagonal de outra cor.");
        break;
    case "rainha":
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
let nota = 45;
if(nota < 0 || nota > 100){
    console.log("ERRO");
} else if(nota >= 90){
    console.log("A");
} else if(nota >= 80){
    console.log("B");
} else if(nota >= 70){
    console.log("C");
} else if(nota >= 60){
    console.log("D");
} else if(nota >= 50){
    console.log("E");
} else{
    console.log("F");
}
//8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
const a = 7;
const b = 15;
const c = 3;
let temPar;
if(a % 2 === 0 || b % 2 === 0 || c % 2 === 0){
    temPar = true;
    console.log(temPar);
} else {
    temPar = false;
    console.log(temPar);
}
//9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .
const a = 6;
const b = 10;
const c = 4;
let temImpar;
if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
    temImpar = true;
    console.log(temImpar);
} else {
    temImpar = false;
    console.log(temImpar);
}
//10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)

const custo = 0.5;
const impostoSobreCusto = custo * 0.20;
let custoTotal = custo + impostoSobreCusto
const valorVenda = 2.5;
if(custoTotal >= 0 && valorVenda >= 0){
    let lucroMil = (valorVenda - custoTotal) * 1000;
    console.log(lucroMil)
} else {
    console.log("Erro! Valores não podem ser negativos!")
}


//11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

const salarioBruto = 6000;
let inss;
if(salarioBruto < 1556.94){
    inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
    inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
    inss = salarioBruto * 0.11;
} else {
    inss = 570.88
}
console.log(inss);


