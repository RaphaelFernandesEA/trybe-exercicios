import Registration from "./enrollable";
import Person from "./person";

export default class Student extends Person implements Registration {
  public registration: string;
  private _tests: number[] = []
  private _homeworks: number[] = [];

  constructor(name: string, birthDate: Date) {
      super(name, birthDate);
      this.validateRegistration();
  };

  get tests() {
    return this._tests;
  };

  set tests(tests: number[]) {
    if (tests.length > 4) {
      throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas')
    }
    this._tests = tests;
  };

  get homeworks() {
    return this._homeworks;
  };

  set homeworks(homeworks: number[]) {
    if (homeworks.length > 2) {
      throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas')
    }
    this._homeworks = homeworks;
  };

  generateRegistration(): string{
    const registrationNumber = this.birthDate.getTime() * Math.floor(Math.random() * 100) * Math.floor(Math.random() * 1000) 

    return registrationNumber.toString();
  };

  validateRegistration(): void {
    const registrationNumber = this.generateRegistration();

    if(registrationNumber.toString().length < 16) {
      this.validateRegistration()
    };

    this.registration = registrationNumber;
  };

  sumGrades(): number {
    let sum = 0;
    this._tests.forEach((grade) => sum += grade);
    this._homeworks.forEach((grade) => sum += grade)
    return sum;
  };

  sumAverageGrade(): number {
    const tests = this._tests.length;
    const homeworks = this._homeworks.length;
    return this.sumGrades()/(tests + homeworks);
  }

};
