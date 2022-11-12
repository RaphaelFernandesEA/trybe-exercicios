"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    ;
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name.length < 3) {
                throw new Error("O nome deve ter no m\u00EDnimo 3 letras");
            }
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (birthDate) {
            if (birthDate > new Date()) {
                throw new Error('Impossível registrar uma previsão de nascimento');
            }
            var convertTime = 1000 / 3600 / 24 / 365;
            if ((new Date().getTime() - birthDate.getTime()) / convertTime > 120) {
                throw new Error('Impossível você ser tão velho assim!!!');
            }
            this._birthDate = birthDate;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
exports.default = Person;
;
var raphael = new Person('Raphael', new Date(1990, 1, 8));
// const person = new Person('João', new Date(2006, 11, 8));
// person.name = 'jo';
console.log(raphael);
// console.log(person);
// console.log(new Date())
