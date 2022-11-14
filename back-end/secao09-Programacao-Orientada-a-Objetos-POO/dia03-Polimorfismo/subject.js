"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(name) {
        this._name = name;
    }
    ;
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            if (name.length < 3)
                throw new Error('O nome da disciplina deve conter no mínimo 3 caracteres');
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return Subject;
}());
exports.default = Subject;
;
