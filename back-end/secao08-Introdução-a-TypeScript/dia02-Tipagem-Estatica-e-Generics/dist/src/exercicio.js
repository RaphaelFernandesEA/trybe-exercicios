"use strict";
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
var Colors;
(function (Colors) {
    Colors["BALCK"] = "preta";
    Colors["WHITE"] = "branca";
    Colors["RED"] = "vermelha";
    Colors["SILVER"] = "prata";
})(Colors || (Colors = {}));
;
var Doors;
(function (Doors) {
    Doors["DRIVER"] = "motorista";
    Doors["RIDE"] = "passageiro";
    Doors["BEHIND_DRIVER"] = "passageiro atras do motorista";
    Doors["BEHIND_RIDE"] = "passageiro traseiro oposto ao motorista";
})(Doors || (Doors = {}));
;
var Directions;
(function (Directions) {
    Directions["RIGTH"] = "direita";
    Directions["LEFT"] = "esquerda";
})(Directions || (Directions = {}));
;
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    ;
    honk() {
        console.log(`Carro buzinou`);
    }
    ;
    openTheDoor(door) {
        console.log(`Porta do ${door} está aberta`);
    }
    ;
    closeTheDoor(door) {
        console.log(`Porta do ${door} está fechada`);
    }
    ;
    turnOn() {
        console.log('Carro ligado');
    }
    ;
    turnOff() {
        console.log('Carro desligado');
    }
    ;
    speedUp() {
        console.log('Carro acelerando');
    }
    ;
    speedDown() {
        console.log('Carro desacelerando');
    }
    ;
    stop() {
        console.log('Carro parado');
    }
    ;
    turn(direction) {
        console.log(`Carro virando a ${direction}`);
    }
    ;
}
;
const gol = new Car('Volkswagen', Colors.SILVER, 4);
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
