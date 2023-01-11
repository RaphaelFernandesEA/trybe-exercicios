"use strict";
exports.__esModule = true;
exports.EvaluationType = void 0;
var EvaluationType;
(function (EvaluationType) {
    EvaluationType["TEST"] = "test";
    EvaluationType["HOMEWORK"] = "homework";
})(EvaluationType = exports.EvaluationType || (exports.EvaluationType = {}));
var Evaluation = /** @class */ (function () {
    // private _type: EvaluationType;
    function Evaluation(score, teacher) {
        this._teacher = teacher;
        this._score = score;
    }
    ;
    Object.defineProperty(Evaluation.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this.validateScore(value);
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Evaluation.prototype, "teacher", {
        get: function () {
            return this._teacher;
        },
        set: function (teacher) {
            this._teacher = teacher;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return Evaluation;
}());
exports["default"] = Evaluation;
