"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._tests = [];
        _this._homeworks = [];
        _this.validateRegistration();
        return _this;
    }
    ;
    Object.defineProperty(Student.prototype, "tests", {
        get: function () {
            return this._tests;
        },
        set: function (tests) {
            if (tests.length > 4) {
                throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas');
            }
            this._tests = tests;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Student.prototype, "homeworks", {
        get: function () {
            return this._homeworks;
        },
        set: function (homeworks) {
            if (homeworks.length > 2) {
                throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas');
            }
            this._homeworks = homeworks;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Student.prototype.createRegistrationNumber = function () {
        var registrationNumber = this.birthDate.getTime() * Math.floor(Math.random() * 100) * Math.floor(Math.random() * 1000);
        return registrationNumber;
    };
    ;
    Student.prototype.validateRegistration = function () {
        var registrationNumber = this.createRegistrationNumber();
        if (registrationNumber.toString().length < 16) {
            this.validateRegistration();
        }
        ;
        this._registration = registrationNumber.toString();
    };
    ;
    Student.prototype.sumGrades = function () {
        var sum = 0;
        this._tests.forEach(function (grade) { return sum += grade; });
        this._homeworks.forEach(function (grade) { return sum += grade; });
        return sum;
    };
    ;
    Student.prototype.sumAverageGrade = function () {
        var tests = this._tests.length;
        var homeworks = this._homeworks.length;
        return this.sumGrades() / (tests + homeworks);
    };
    return Student;
}(person_1["default"]));
exports["default"] = Student;
;
