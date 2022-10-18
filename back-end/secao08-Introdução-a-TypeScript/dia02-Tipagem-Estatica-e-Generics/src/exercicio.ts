// Exercício 1: Crie uma classe Car cujo objeto representará um carro.

// Propriedades:

// Deve conter uma propriedade do tipo string chamada brand que representa a marca.
// Deve conter uma propriedade do tipo enum chamada color que representa a cor.
// A cor pode ser: preta, branca, vermelha ou prata.
// Deve conter uma propriedade do tipo number chamada doors que representa a quantidade de portas.
// Comportamentos:

// Deve possuir um método chamado honk que aciona a buzina do carro.
// Deve possuir um método chamado openTheDoor que recebe como parâmetro uma porta do tipo enum e abre.
// Deve possuir um método chamado closeTheDoor que recebe como parâmetro uma porta do tipo enum e fecha.
// Deve possuir um método chamado turnOn que liga o carro.
// Deve possuir um método chamado turnOff que desliga o carro.
// Deve possuir um método chamado speedUp que acelera o carro.
// Deve possuir um método chamado speedDown que reduz a velocidade do carro.
// Deve possuir um método chamado stop que para o carro.
// Deve possuir um método chamado turn que recebe uma direção do tipo enum e vira o carro.

enum Colors {
  BALCK = 'preta',
  WHITE = 'branca',
  RED = 'vermelha',
  SILVER = 'prata'
};

enum Doors {
  DRIVER = 'motorista',
  RIDE = 'passageiro',
  BEHIND_DRIVER = 'passageiro atras do motorista',
  BEHIND_RIDE = 'passageiro traseiro oposto ao motorista'
};

enum Directions {
  RIGTH = 'direita',
  LEFT = 'esquerda'
};

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  };

  honk(): void{
    console.log(`Carro buzinou`)
  };

  openTheDoor(door: Doors): void {
    console.log(`Porta do ${door} está aberta`);
  };
  closeTheDoor(door: Doors): void {
    console.log(`Porta do ${door} está fechada`);
  };

  turnOn(): void {
    console.log('Carro ligado');
  };

  turnOff(): void {
    console.log('Carro desligado');
  };

  speedUp(): void {
    console.log('Carro acelerando');
  };

  speedDown(): void {
    console.log('Carro desacelerando');
  };

  stop(): void {
    console.log('Carro parado');
  };

  turn(direction: Directions): void {
    console.log(`Carro virando a ${direction}`);
  };
};

const gol = new Car('Volkswagen',Colors.SILVER, 4);

//Exercício 2: Vamos agora utilizar a classe Car que criamos no exercício anterior. Uma pessoa motorista de aplicativo fará uma viagem para pegar sua nova pessoa passageira. Ela então entra em seu volkswagen gol prata de 4 portas, liga seu carro e começa o trajeto:

// Siga em frente;
// Em 600 metros vire a esquerda;
// Vire a esquerda;
// Em 200 metros na rotatória pegue a segunda saída a direita;
// Mantenha em frente pelos próximos 1,2 quilômetros;
// Em 300 metros vire a direita;
// Vire a direita;
// Em 400 metros você chegará ao seu destino;
// Você chegou ao seu destino.
// Pronto. A pessoa motorista para, a pessoa passageira entra pela porta de trás do lado do carona e a viagem continua.

// Siga em frente;
// Em 300 metros vire a direita;
// Vire a direita;
// Mantenha em frente pelos próximos 2 quilômetros;
// Em 200 metros vire a esquerda;
// Vire a esquerda;
// Em 400 metros vire a direita;
// Vire a direita;
// Em 100 metros você chegará ao destino.
// Você chegou ao destino.
// A pessoa passageira desce do veículo e a pessoa motorista segue para a próxima corrida.

// Agora você deve desenvolver um script capaz de automatizar todo o cenário descrito.




gol.openTheDoor(Doors.DRIVER);
gol.closeTheDoor(Doors.DRIVER);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown;
gol.turn(Directions.RIGTH);
gol.speedUp();
gol.speedDown();
gol.stop();

gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGTH);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGTH);
gol.speedUp();
gol.speedDown();
gol.stop();

gol.openTheDoor(Doors.BEHIND_RIDE);
gol.closeTheDoor(Doors.BEHIND_RIDE);

// Exercício 3: Crie uma interface que represente uma pizza. Ela deve conter:

// Uma propriedade do tipo string chamada flavor que representa o sabor.
// Uma propriedade chamada slices cujo tipo é a união entre os possíveis números de fatias da pizza.
// O número de fatias pode ser 4, 6 ou 8;
// Utilize um type alias para armazenar o tipo dessa propriedade.
// a) Crie uma pizza sabor Calabresa de 8 fatias;

// b) Crie uma pizza sabor Marguerita de 6 fatias;

// c) Crie uma pizza sabor Nutela de 4 fatias.

type Slices = 4 | 6 | 8

type CommomFlavours = 'Calabresa' | 'Frango' | 'Pepperoni'

type VegetarianFlavours = 'Marguerita' |'Palmito' | 'Cogumelo'

type SweetFlavours = 'Nutela' | 'Goiabada com Queijo' | 'Marshmallow'

interface Pizza {
  flavor: string,
  slices: Slices,
};

const calabresaG: Pizza = {
  flavor:'Calabresa',
  slices: 8
};

const margueritaM: Pizza = {
  flavor: 'Marguerita',
  slices: 6
};

const nutellaP: Pizza = {
  flavor: 'Nutella',
  slices: 4
};

interface Commom extends Pizza {
  flavor: CommomFlavours,
  slices: Slices
};

interface Vegetarian extends Pizza {
  flavor: VegetarianFlavours,
  slices: Slices
};

interface Sweet extends Pizza {
  flavor: SweetFlavours,
  slices: Slices
};

// Exercício 4: Vamos agora estender nossa interface Pizza com novos tipos de pizza. São eles:

// Pizza Comum - seus sabores são “Calabresa”, “Frango” e “Pepperoni”, podem ter 4, 6 ou 8 pedaços.
// Pizza Vegetariana - seus sabores são “Marguerita”, “Palmito” e “Cogumelo”, podem ter 4, 6 ou 8 pedaços.
// Pizza Doce - seus sabores são “Nutela”, “Goiabada com Queijo” e “Marshmallow”, podem ter somente 4 pedaços.
// Você deve usar type alias e type unions para criar os possíveis sabores de cada tipo de pizza.

// Agora crie:

// 3 pizzas do tipo comum;

const calabrezaM: Commom = {
  flavor: 'Calabresa',
  slices: 4
}

const frangoG: Commom = {
  flavor: 'Frango',
  slices: 8
};

const PepperoniP: Commom = {
  flavor: 'Pepperoni',
  slices: 4
};

// 2 pizzas do tipo vegetariana;

const margueritaG: Vegetarian = {
  flavor: 'Marguerita',
  slices: 8
};

const palmitoP: Vegetarian = {
  flavor: 'Palmito',
  slices: 4
};
// 1 pizza do tipo doce.

const nutellaG: Sweet = {
  flavor: 'Nutela',
  slices: 8
};

// Exercício 5: Em JavaScript, temos a High Order Function filter. Ela funciona da seguinte forma:

// Recebe como primeiro parâmetro um array que pode ser de qualquer tipo;
// Recebe como segundo parâmetro uma função de callback;
// Retorna um novo array removendo os itens que não atendem a condição da função de callback;
// A função de callback recebe como primeiro parâmetro um item do tipo do array;
// A função de callback pode receber como segundo parâmetro um index do tipo inteiro;
// A função de callback pode receber como terceiro parâmetro o próprio array;
// A função de callback devolve um booleano.
// Usando generics e os demais conceitos aprendidos em TypeScript, recrie a função filter e nomeie-a como myFilter.

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callbackFilter<T>): Array<T> {
  const newArray: Array<T> = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

console.log(myFilter([1, 2, 3], (item, index, array) => item < 3 ));

console.log(myFilter(["a", "b", "c"], (item, index, array) => {
  return item !== "a"
}));