import Person from "./person";

export default abstract class Employee extends Person {
  registration: number;
  salary: number;
  admissionDate: Date;
  abstract generateRegistration(): string;
}