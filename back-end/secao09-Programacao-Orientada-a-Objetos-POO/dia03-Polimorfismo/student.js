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
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._evaluationsResults = [];
        _this.validateRegistration();
        _this.valiadeteEvaluations(_this._evaluationsResults);
        return _this;
    }
    ;
    Object.defineProperty(Student.prototype, "evaluationsResults", {
        get: function () {
            return this._evaluationsResults;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Student.prototype.valiadeteEvaluations = function (_evaluationsResults) {
        var tests = this._evaluationsResults.filter(function (test) { return test.evaluation === exam_1.default; });
        // const homeworks = this._evaluationsResults.filter((homework) => homework.evaluation.type === EvaluationType.HOMEWORK)
        if (tests.length >= 4) {
            throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas');
        }
        ;
        // if (homeworks.length >= 2) {
        //   throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas')
        // };
        this._evaluationsResults = _evaluationsResults;
    };
    ;
    Student.prototype.generateRegistration = function () {
        var registrationNumber = this.birthDate.getTime() * Math.floor(Math.random() * 100) * Math.floor(Math.random() * 1000);
        return registrationNumber.toString();
    };
    ;
    Student.prototype.validateRegistration = function () {
        var registrationNumber = this.generateRegistration();
        if (registrationNumber.toString().length < 16) {
            this.validateRegistration();
        }
        ;
        this.registration = registrationNumber;
    };
    ;
    Student.prototype.addEvaluationResult = function (evaluationResult) {
        this.valiadeteEvaluations(this._evaluationsResults);
        this._evaluationsResults.push(evaluationResult);
    };
    return Student;
}(person_1.default));
exports.default = Student;
;
