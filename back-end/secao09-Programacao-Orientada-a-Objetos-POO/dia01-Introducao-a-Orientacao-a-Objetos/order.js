"use strict";
exports.__esModule = true;
var Discount;
(function (Discount) {
    Discount[Discount["DEZ"] = 0.1] = "DEZ";
    Discount[Discount["TRINTA"] = 0.3] = "TRINTA";
})(Discount || (Discount = {}));
var Order = /** @class */ (function () {
    function Order(_costumer, _itens, _payment, _discount) {
        if (_itens === void 0) { _itens = []; }
        this._costumer = _costumer;
        this._itens = _itens;
        this._payment = _payment;
        this._discount = _discount;
    }
    Order.prototype.totalOrder = function () {
        var total = 0;
        this._itens.forEach(function (item) { return total += item.price; });
        return total;
    };
    Order.prototype.orderWithDiscount = function () {
        if (this._discount === undefined) {
            return this.totalOrder;
        }
        else {
            var total = this.totalOrder() - (this.totalOrder() * this._discount);
            return total;
        }
    };
    return Order;
}());
exports["default"] = Order;
