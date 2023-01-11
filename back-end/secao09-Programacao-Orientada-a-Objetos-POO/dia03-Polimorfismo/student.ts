import Registration from "./enrollable";
import { EvaluationType } from "./evaluation";
import EvaluationResult from "./evaluationResult";
import Exam from "./exam";
import Person from "./person";
import Work from "./work";

export default class Student extends Person implements Registration {
  public registration: string;
  private _evaluationsResults: EvaluationResult[] = [];

  constructor(name: string, birthDate: Date) {
      super(name, birthDate);
      this.validateRegistration();
      // this.valiadeteEvaluations(this._evaluationsResults)
  };

  get evaluationsResults() {
    return this._evaluationsResults;
  };

  valiadeteEvaluations() {
    let examCount = 0;
    let workCount = 0;
    this._evaluationsResults.map((test) => {
      if(test.evaluation instanceof Exam) {
        examCount += 1
      }
      if(test.evaluation instanceof Work) {
        workCount += 1
      }
    });
    if (examCount > 4) {
      throw new Error('A pessoa estudante deve possuir apenas 4 notas de provas')
    };

    if (workCount >= 2) {
      throw new Error('A pessoa estudante deve possuir apenas 2 notas de trabalhos')
    };
    // this._evaluationsResults = _evaluationsResults;
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
    this.valiadeteEvaluations();
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
