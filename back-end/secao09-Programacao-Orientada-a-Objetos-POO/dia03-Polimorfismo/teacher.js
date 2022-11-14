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
var employee_1 = require("./employee");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, salary, subject) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.validations();
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.validations = function () {
        if (this.salary < 0) {
            throw new Error('O salário não pode ser negativo.');
        }
        ;
        if (this.admissionDate > new Date()) {
            throw new Error("\n      Data inv\u00E1lida:\n      - N\u00E3o \u00E9 permitido o registro de data de admiss\u00E3o em datas futuras.\n      ");
        }
        ;
        var registrationNumber = this.generateRegistration();
        if (registrationNumber.length < 16) {
            this.generateRegistration();
        }
        ;
    };
    Teacher.prototype.generateRegistration = function () {
        var registrationNumber = this.birthDate.getTime() * Math.floor(Math.random() * 100) * Math.floor(Math.random() * 1000);
        this.registration = Math.abs(registrationNumber);
        return registrationNumber.toString();
    };
    ;
    return Teacher;
}(employee_1.default));
exports.default = Teacher;
