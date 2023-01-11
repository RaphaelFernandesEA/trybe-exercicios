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
var evaluation_1 = require("./evaluation");
var Exam = /** @class */ (function (_super) {
    __extends(Exam, _super);
    function Exam(score, teacher) {
        var _this = _super.call(this, score, teacher) || this;
        _this.validateScore(score);
        return _this;
    }
    Exam.prototype.validateScore = function (score) {
        if (score < 0) {
            throw new Error("A pontuação não pode ser negativa");
        }
        ;
        if (score > 25) {
            throw new Error("As provas não podem valer mais que 25 pontos");
        }
        ;
        _super.prototype.score === score;
    };
    return Exam;
}(evaluation_1["default"]));
exports["default"] = Exam;
