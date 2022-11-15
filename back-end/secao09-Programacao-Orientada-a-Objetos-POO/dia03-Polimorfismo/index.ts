import Evaluation, { EvaluationType } from "./evaluation";
import EvaluationResult from "./evaluationResult";
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


const historyTest1 = new Evaluation(10, maestri, EvaluationType.TEST);
const historyTest2 = new Evaluation(10, maestri, EvaluationType.TEST);
const historyTest3 = new Evaluation(10, maestri, EvaluationType.TEST);
const historyTest4 = new Evaluation(10, maestri, EvaluationType.TEST);
const historyTest5 = new Evaluation(10, maestri, EvaluationType.TEST);

// console.log(avaliacao);
const mathHomework1 = new Evaluation(5, dirceu, EvaluationType.HOMEWORK);
// avalicao1.score = -3;

const raphaelHistory1 = new EvaluationResult(historyTest1, 10);
const raphaelHistory2 = new EvaluationResult(historyTest1, 10);
const raphaelHistory3 = new EvaluationResult(historyTest1, 10);
const raphaelHistory4 = new EvaluationResult(historyTest1, 10);
const raphaelHistory5 = new EvaluationResult(historyTest1, 10);
const raphaelHistory6 = new EvaluationResult(historyTest1, 10);


const raphaelMathHomeworkResult = new EvaluationResult(mathHomework1, 3);

const raphaelHistoryTetsResults = [raphaelHistory1, raphaelHistory2, raphaelHistory3, raphaelHistory4, raphaelMathHomeworkResult];

raphael.addEvaluationResult(raphaelHistory1)
raphael.addEvaluationResult(raphaelHistory2)
raphael.addEvaluationResult(raphaelHistory3)
raphael.addEvaluationResult(raphaelHistory4)
raphael.addEvaluationResult(raphaelHistory5)
// raphael.addEvaluationResult(raphaelHistory6)


console.log(raphael)