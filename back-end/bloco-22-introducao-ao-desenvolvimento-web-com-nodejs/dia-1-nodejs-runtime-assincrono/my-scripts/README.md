EXERCICIOS DO DIA 

🚀 1- Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.

OBS: a sigla IMC, traduzida para o inglês, equivale a BMI(Body Mass Index). Vamos adotar este padrão nos códigos para começarmos a nos acostumar com o formado que aparecerá no mercado de trabalho!

Armazene o código no arquivo bmi.js.

A fórmula para calcular o IMC é weight / height ^ 2.

Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
Comece criando um novo pacote Node com npm init e respondendo às perguntas do npm.
Por enquanto, não se preocupe em pedir input do usuário. Utilize valores fixos para weight e height.

🚀 2- Agora, permita que o código seja executado através do comando npm run bmi.
O novo código criado deve conter o comando que chama o node para executar o arquivo bmi.js.

🚀 3- Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.
Edite o código para que os valores de weight e height sejam informados pela pessoa ao responder as perguntas: "What' your weight?" e "What' your height?", deve-se utilizar o pacote readline-sync.

🚀 4- Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre a função adequada para realizar input de valores float.
Encontrou a função? Show! Agora utilize-a para solicitar o input de weight.

🚀 5- Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
Considere a seguinte tabela para classificar a situação do IMC:
IMC	Situação:

Abaixo de 18,5.

Abaixo do peso (magreza);

Entre 18,5 e 24,9	Peso normal;

Entre 25,0 e 29,9	Acima do peso (sobrepeso)

Entre 30,0 e 34,9	Obesidade grau I

Entre 35,0 e 39,9	Obesidade grau II

40,0 e acima	Obesidade graus III e IV

🚀 6- Utilize o arquivo baixado para realizar os requisitos abaixo.

<a href="https://assets.app.betrybe.com/back-end/nodejs/introduction/simpsons-66167ea76cd09d1db9b030e66f0c0dfc.json">Download do aquivo </a>

- Utilize async/await para escrever seu código. Procure não utilizar callbacks.

- Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

- Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

- Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

- Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.

- Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

- Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.