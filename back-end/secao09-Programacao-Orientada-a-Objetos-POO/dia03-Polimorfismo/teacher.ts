import Employee from "./employee";
import Person from "./person";
import Subject from "./subject";

export default class Teacher extends Employee {
  private _subject: Subject;
  public registration: number;
  public salary: number;
  public admissionDate: Date;

  constructor(name: string,  birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this.validations();
  }

  get subject() {
    return this._subject;
  }

  validations() {
    if (this.salary < 0) {
      throw new Error('O salário não pode ser negativo.')
    };

    if (this.admissionDate > new Date()) {
      throw new Error(`
      Data inválida:
      - Não é permitido o registro de data de admissão em datas futuras.
      `)
    };
    const registrationNumber = this.generateRegistration();
    if(registrationNumber.length < 16) {
      this.generateRegistration();
    };
  }
  
  generateRegistration(): string {
    const registrationNumber = this.birthDate.getTime() * Math.floor(Math.random() * 100) * Math.floor(Math.random() * 1000);

    this.registration = Math.abs(registrationNumber);
    return registrationNumber.toString();
  };
}
