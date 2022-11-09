class Student {
  private _registration: number;
  private _name: string;
  private _test1: number
  private _test2: number;
  private _test3: number;
  private _test4: number;
  private _homework1: number;
  private _homework2: number;

  constructor(
    registration: number,
    name: string,
    test1: number,
    test2: number,
    test3: number,
    test4: number,
    homework1: number,
    homework2: number
    ) {
      this._registration = registration;
      this._name = name;
      this._test1 = test1;
      this._test2 = test2;
      this._test3 = test3;
      this._test4 = test4;
      this._homework1 = homework1;
      this._homework2 = homework2;
  };

  get name() {
    return this._name;
  }

  sumGrade(): number {
    const sum = this._test1 + this._test2 + this._test3 + this._test4 + this._homework1 + this._homework2;
    return sum;
  };

  averageGrade(): number {
    return this.sumGrade() / 6;
  };
};

const bruno = new Student(202214541440, 'Bruno Alves', 8, 4.5, 10, 6.8, 10, 10);

console.log(`A soma das notas de ${bruno.name} é: ${bruno.sumGrade()}`);
console.log(`A soma das notas de ${bruno.name} é: ${bruno.averageGrade()}`);