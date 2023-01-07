// #Aprofunde seus conhecimentos
// Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
// Copiar
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let index = 0; index < numbers.length; index +=1){
    console.log(numbers[index]);
}
//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for(let index = 0; index < numbers.length; index +=1){
    somaNumbers += numbers[index];
}
console.log(somaNumbers);

//3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for(let index = 0; index < numbers.length; index +=1){
    somaNumbers += numbers[index];
}
let mediaArit = somaNumbers / numbers.length
console.log(mediaArit);

//4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaNumbers = 0;
for(let index = 0; index < numbers.length; index +=1){
    somaNumbers += numbers[index];
}
let mediaArit = somaNumbers / numbers.length
if(mediaArit > 20){
    console.log("Valor maior que 20.");
} else {
    console.log("Valor menor ou igual a 20.");
}

//5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index];
    }    
}
console.log(maiorNumero);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;
for (let index = 0; index < numbers.length; index +=1){
    if(numbers[index] % 2 !== 0){
        numerosImpares +=1;
}
}
if(numerosImpares === 0){
    console.log("Nenhum valor ímpar encontrado");
} else {
console.log(numerosImpares);
}

//7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = numbers[0];
for(let index = 0; index < numbers.length; index +=1){
    if(menorNum < numbers[index]){
        menorNum = menorNum;
    } else {
        menorNum = numbers[index]
    }
}
console.log(menorNum);

//##### MELHORAMENTO ABAIXO #######

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNum = numbers[0];
for (let index = 1; index < numbers.length; index += 1){
    if (menorNum > numbers[index]){
        menorNum = numbers[index];
    }
}
console.log(menorNum);


//8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = [];
for (let index = 1; index <= 25; index +=1){
    numbers.push(index);
}
console.log(numbers);


//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let numbers = [];
for (let index = 1; index <= 25; index +=1){
    numbers.push(index);
}
console.log(numbers);
let divDois = [];
for(let index = 0; index < numbers.length; index += 1){
    divDois.push(numbers[index]/2);
}
console.log(divDois);

//##### MELHORAMENTO ABAIXO ########

let numbers = [];
for (let index = 1; index <= 25; index +=1){
    numbers.push(index);
}
console.log(numbers);
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };

  //EXERCÍCIO BÔNUS 1:
  // Ordene o array numbers em ordem crescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(index = 1; index < numbers.length; index += 1){
    for(secondIndex = 0; secondIndex < index; secondIndex += 1){
        if(numbers[secondIndex] > numbers[index]){
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
} 
console.log(numbers);

  //EXERCÍCIO BÔNUS 2:
  // Ordene o array numbers em ordem decrescente e imprima seus valores;
  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(index = 1; index < numbers.length; index += 1){
    for(secondIndex = 0; secondIndex < index; secondIndex += 1){
        if(numbers[secondIndex] < numbers[index]){
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
} 
console.log(numbers);

  //EXERCÍCIO BÔNUS 3:
//   Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

  let newArray = [];
  for (let index = 1; index < numbers.length; index += 1) {
    let newNumber = numbers[index] * numbers[(index - 1)]
    newArray.push(newNumber);
  };
  newArray.push((numbers[numbers.length - 1])* 2);
  console.log(newArray);
  
