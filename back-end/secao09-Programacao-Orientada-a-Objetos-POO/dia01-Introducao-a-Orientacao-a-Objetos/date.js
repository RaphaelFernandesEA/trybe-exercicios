"use strict";
exports.__esModule = true;
exports.Month = void 0;
var Month;
(function (Month) {
    Month[Month["january"] = 1] = "january";
    Month[Month["february"] = 2] = "february";
    Month[Month["march"] = 3] = "march";
    Month[Month["april"] = 4] = "april";
    Month[Month["may"] = 5] = "may";
    Month[Month["june"] = 6] = "june";
    Month[Month["july"] = 7] = "july";
    Month[Month["august"] = 8] = "august";
    Month[Month["september"] = 9] = "september";
    Month[Month["october"] = 10] = "october";
    Month[Month["novemder"] = 11] = "novemder";
    Month[Month["december"] = 12] = "december";
})(Month = exports.Month || (exports.Month = {}));
;
var Data = /** @class */ (function () {
    function Data(day, month, year) {
        var dateString = "".concat(month, "-").concat(day, "-").concat(year);
        if (new Date(dateString).getDate() !== day) {
            this._day = 1;
            this._month = 1;
            this._year = 1900;
        }
        else {
            this._day = day;
            this._month = month;
            this._year = year;
        }
    }
    Object.defineProperty(Data.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (value) {
            this._day = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            this._month = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Data.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (value) {
            this._year = value;
        },
        enumerable: false,
        configurable: true
    });
    Data.prototype.getMonthName = function () {
        return Month[this._month];
    };
    Data.prototype.isLeapYear = function () {
        if (this._year % 4 === 0) {
            return true;
        }
        return false;
    };
    Data.prototype.compare = function (dateToCompare) {
        var date = new Date(this._year, this._month, this._day);
        var toCompare = new Date(dateToCompare._year, dateToCompare._month, dateToCompare._day);
        if (date > toCompare)
            return 1;
        if (date < toCompare)
            return -1;
        return 0;
    };
    return Data;
}());
exports["default"] = Data;
var date = new Data(22, 12, 1995);
var date2 = new Data(22, 12, 1994);
console.log(date);
console.log(date.getMonthName());
console.log(date.isLeapYear());
console.log(date.compare(date2));
