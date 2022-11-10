"use strict";
exports.__esModule = true;
var Item = /** @class */ (function () {
    function Item(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    Object.defineProperty(Item.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
exports["default"] = Item;
