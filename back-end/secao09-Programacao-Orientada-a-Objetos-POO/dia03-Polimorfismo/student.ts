import Registration from "./enrollable";
import { EvaluationType } from "./evaluation";
import EvaluationResult from "./evaluationResult";
import Exam from "./exam";
import Person from "./person";

export default class Student extends Person implements Registration {
  public registration: string;
  private _evaluationsResults: EvaluationResult[] = [];

  constructor(name: string, birthDate: Date) {
      super(name, birthDate);
      this.validateRegistration();
      this.valiadeteEvaluations(this._evaluationsResults)
  };

  get evaluationsResults() {
    return this._evaluationsResults;
  };

  valiadeteEvaluations(_evaluationsResults) {
    const tests = this._evaluationsResults.filter((test) => test.evaluation === Exam);
    // const homeworks = this._evaluationsResults.filter((homework) => homework.evaluation.type === EvaluationType.HOMEWORK)

    if (tests.length >= 4) {
      throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas')
    };

    // if (homeworks.length >= 2) {
    //   throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas')
    // };
    this._evaluationsResults = _evaluationsResults;
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

  addEvaluationResult(evaluationResult:  EvaluationResult ) {
    this.valiadeteEvaluations(this._evaluationsResults);
    this._evaluationsResults.push(evaluationResult);
  }

  // sumGrades(): number {
  //   let sum = 0;
  //   this._tests.forEach((grade) => sum += grade);
  //   this._homeworks.forEach((grade) => sum += grade)
  //   return sum;
  // };

  // sumAverageGrade(): number {
  //   const tests = this._tests.length;
  //   const homeworks = this._homeworks.length;
  //   return this.sumGrades()/(tests + homeworks);
  // }

};
