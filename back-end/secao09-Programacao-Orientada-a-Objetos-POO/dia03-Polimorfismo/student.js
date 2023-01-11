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
var exam_1 = require("./exam");
var person_1 = require("./person");
var work_1 = require("./work");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._evaluationsResults = [];
        _this.validateRegistration();
        return _this;
        // this.valiadeteEvaluations(this._evaluationsResults)
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
    Student.prototype.valiadeteEvaluations = function () {
        var examCount = 0;
        var workCount = 0;
        this._evaluationsResults.map(function (test) {
            if (test.evaluation instanceof exam_1["default"]) {
                examCount += 1;
            }
            if (test.evaluation instanceof work_1["default"]) {
                workCount += 1;
            }
        });
        if (examCount > 4) {
            throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas');
        }
        ;
        if (workCount >= 2) {
            throw new Error('A pessoa estudante deve possuir apenas 2 notas de trabalhos');
        }
        ;
        // this._evaluationsResults = _evaluationsResults;
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
        this.valiadeteEvaluations();
        this._evaluationsResults.push(evaluationResult);
    };
    return Student;
}(person_1["default"]));
exports["default"] = Student;
;
