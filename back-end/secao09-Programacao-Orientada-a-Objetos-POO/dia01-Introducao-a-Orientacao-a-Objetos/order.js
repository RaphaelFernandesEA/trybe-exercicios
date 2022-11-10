"use strict";
exports.__esModule = true;
exports.Payment = exports.Discount = void 0;
var Discount;
(function (Discount) {
    Discount[Discount["DEZ"] = 0.1] = "DEZ";
    Discount[Discount["TRINTA"] = 0.3] = "TRINTA";
})(Discount = exports.Discount || (exports.Discount = {}));
var Payment;
(function (Payment) {
    Payment["DEBITO"] = "debito";
    Payment["CREDITO"] = "credito";
    Payment["PIX"] = "pix";
})(Payment = exports.Payment || (exports.Payment = {}));
var Order = /** @class */ (function () {
    function Order(_costumer, _itens, _payment, _discount) {
        if (_itens === void 0) { _itens = []; }
        this._costumer = _costumer;
        this._itens = _itens;
        this._payment = _payment;
        this._discount = _discount;
        this._price = 0;
    }
    Object.defineProperty(Order.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price += value;
        },
        enumerable: false,
        configurable: true
    });
    Order.prototype.totalOrder = function () {
        var _this = this;
        this._itens.forEach(function (item) { return _this._price += item.price; });
        console.log("O valor total do pedido \u00E9: R$".concat(this._price));
        return this._price;
    };
    Order.prototype.orderWithDiscount = function () {
        var _this = this;
        switch (this._discount) {
            case undefined:
                return this.totalOrder();
            case 0.1:
                this._itens.forEach(function (item) { return _this._price += item.price; });
                this._price = this._price - (this._price * this._discount);
                console.log("O valor do pedido com 10% de desconto \u00E9: ".concat(this._price));
                return this._price;
            case 0.3:
                this._itens.forEach(function (item) { return _this._price += item.price; });
                this._price = this._price - (this._price * this._discount);
                console.log("O valor do pedido com 30% de desconto \u00E9: ".concat(this._price));
                return this._price;
        }
    };
    return Order;
}());
exports["default"] = Order;
