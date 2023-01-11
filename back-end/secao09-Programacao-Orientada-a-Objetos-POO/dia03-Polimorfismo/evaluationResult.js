"use strict";
exports.__esModule = true;
var EvaluationResult = /** @class */ (function () {
    function EvaluationResult(evaluation, score) {
        this._evaluation = evaluation;
        this.validateScore(score);
    }
    ;
    Object.defineProperty(EvaluationResult.prototype, "evaluation", {
        get: function () {
            return this._evaluation;
        },
        set: function (evaluation) {
            this._evaluation = evaluation;
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(EvaluationResult.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (score) {
            this.validateScore(score);
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    ;
    EvaluationResult.prototype.validateScore = function (score) {
        if (score < 0)
            throw new Error("A nota não pode ser negativa.");
        if (score > this._evaluation.score)
            throw new Error("A nota não pode ser superior à nota da avaliaçao.");
        this._score = score;
    };
    ;
    return EvaluationResult;
}());
exports["default"] = EvaluationResult;
;
