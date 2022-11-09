var Student = /** @class */ (function () {
    function Student(registration, name, test1, test2, test3, test4, homework1, homework2) {
        this._registration = registration;
        this._name = name;
        this._test1 = test1;
        this._test2 = test2;
        this._test3 = test3;
        this._test4 = test4;
        this._homework1 = homework1;
        this._homework2 = homework2;
    }
    ;
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrade = function () {
        var sum = this._test1 + this._test2 + this._test3 + this._test4 + this._homework1 + this._homework2;
        return sum;
    };
    ;
    Student.prototype.averageGrade = function () {
        return this.sumGrade() / 6;
    };
    ;
    return Student;
}());
;
var bruno = new Student(202214541440, 'Bruno Alves', 8, 4.5, 10, 6.8, 10, 10);
console.log("A soma das notas de ".concat(bruno.name, " \u00E9: ").concat(bruno.sumGrade()));
console.log("A soma das notas de ".concat(bruno.name, " \u00E9: ").concat(bruno.averageGrade()));
