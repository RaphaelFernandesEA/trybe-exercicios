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
var Work = /** @class */ (function (_super) {
    __extends(Work, _super);
    function Work(score, teacher) {
        return _super.call(this, score, teacher) || this;
    }
    Work.prototype.validateScore = function (score) {
        if (score < 0) {
            throw new Error("A pontuação não pode ser negativa");
        }
        ;
        if (score > 50) {
            throw new Error("Os trabalhos não podem valer mais que 50 pontos");
        }
        ;
    };
    return Work;
}(evaluation_1["default"]));
exports["default"] = Work;
