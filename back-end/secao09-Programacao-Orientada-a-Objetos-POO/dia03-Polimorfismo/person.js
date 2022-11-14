"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this._name = name;
        this.validateBirthDate(birthDate);
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
        enumerable: false,
        configurable: true
    });
    Person.prototype.validateBirthDate = function (birthDate) {
        if (birthDate > new Date()) {
            throw new Error('Impossível registrar uma pessoa não nascida');
        }
        ;
        var currentDate = (((new Date().getTime() / 1000) / 3600) / 24) / 365;
        var birthdayDate = (((birthDate.getTime() / 1000) / 3600) / 24) / 365;
        if (currentDate - birthdayDate > 120) {
            throw new Error('Impossível você ser tão velho assim!!!');
        }
        this._birthDate = birthDate;
    };
    return Person;
}());
exports.default = Person;
;
