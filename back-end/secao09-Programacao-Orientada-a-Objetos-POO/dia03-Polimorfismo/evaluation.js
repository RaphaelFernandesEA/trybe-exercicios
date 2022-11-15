"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationType = void 0;
var EvaluationType;
(function (EvaluationType) {
    EvaluationType["TEST"] = "test";
    EvaluationType["HOMEWORK"] = "homework";
})(EvaluationType = exports.EvaluationType || (exports.EvaluationType = {}));
var Evaluation = /** @class */ (function () {
    function Evaluation(score, teacher, type) {
        this._teacher = teacher;
        this._type = type;
        this.validateScore(score);
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
    Object.defineProperty(Evaluation.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Evaluation.prototype.validateScore = function (score) {
        if (score < 0) {
            throw new Error("A pontuação não pode ser negativa");
        }
        ;
        if (this._type === EvaluationType.TEST && score > 25) {
            throw new Error("As provas não podem valer mais que 25 pontos");
        }
        ;
        if (this._type === EvaluationType.HOMEWORK && score > 50) {
            throw new Error("Os trabalhos não podem valer mais que 50 pontos");
        }
        ;
        this._score = score;
    };
    return Evaluation;
}());
exports.default = Evaluation;
