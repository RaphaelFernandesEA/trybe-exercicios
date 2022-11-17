import Evaluation, { EvaluationType } from "./evaluation";
import EvaluationResult from "./evaluationResult";
import Exam from "./exam";
import Person from "./person";
import Student from "./student";
import Subject from "./subject";
import Teacher from "./teacher";

const raphael = new Student('Raphael', new Date(1990, 1, 8))
const joao = new Student('João', new Date(2000, 11, 8));
// console.log(raphael, person);
// person.name = 'jo';

const student = new Student('Estudante', new Date(1990, 2, 3));
// student.tests = testsGrades;
// student.homeworks = homeworksGrades;
// console.log(student.sumGrades());
// console.log(student.sumAverageGrade());


export const math = new  Subject('Matemática');
export const history = new Subject('História');
export const filosofy = new Subject('Fiosofia');

// console.log(math, history, filosofy);

const dirceu = new Teacher('Dirceu', new Date(1939, 9,22),4.500, math);
dirceu.admissionDate = new Date(1988, 1, 3)
const maestri = new Teacher('Tenente Maestri', new Date(1968, 4, 19), 9.350, history);
const frango = new Teacher('Professor Frango Borra Botas', new Date(1985, 7, 30), 3000, filosofy)
// console.log(dirceu);
// console.log(maestri);
// console.log(frango)

const historyExam1 = new Exam(10, maestri);
console.log(historyExam1);
console.log(historyExam1.score)
// const historyExam2 = new Exam(-1, maestri);

const historyExam1Result = new EvaluationResult(historyExam1, 9);
// console.log(historyExam1Result);