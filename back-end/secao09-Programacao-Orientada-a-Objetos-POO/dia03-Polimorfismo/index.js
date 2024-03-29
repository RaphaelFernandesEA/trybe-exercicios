"use strict";
exports.__esModule = true;
exports.filosofy = exports.history = exports.math = void 0;
var evaluationResult_1 = require("./evaluationResult");
var exam_1 = require("./exam");
var student_1 = require("./student");
var subject_1 = require("./subject");
var teacher_1 = require("./teacher");
var work_1 = require("./work");
var raphael = new student_1["default"]('Raphael', new Date(1990, 1, 8));
var joao = new student_1["default"]('João', new Date(2000, 11, 8));
// console.log(raphael, person);
// person.name = 'jo';
var student = new student_1["default"]('Estudante', new Date(1990, 2, 3));
// student.tests = testsGrades;
// student.homeworks = homeworksGrades;
// console.log(student.sumGrades());
// console.log(student.sumAverageGrade());
exports.math = new subject_1["default"]('Matemática');
exports.history = new subject_1["default"]('História');
exports.filosofy = new subject_1["default"]('Fiosofia');
// console.log(math, history, filosofy);
var dirceu = new teacher_1["default"]('Dirceu', new Date(1939, 9, 22), 4.500, exports.math);
dirceu.admissionDate = new Date(1988, 1, 3);
var maestri = new teacher_1["default"]('Tenente Maestri', new Date(1968, 4, 19), 9.350, exports.history);
var frango = new teacher_1["default"]('Professor Frango Borra Botas', new Date(1985, 7, 30), 3000, exports.filosofy);
// console.log(dirceu);
// console.log(maestri);
// console.log(frango)
var historyExam1 = new exam_1["default"](10, maestri);
var historyExam2 = new exam_1["default"](10, maestri);
var historyExam3 = new exam_1["default"](10, maestri);
var historyExam4 = new exam_1["default"](10, maestri);
var historyExam5 = new exam_1["default"](10, maestri);
// console.log(historyExam1);
// console.log(historyExam1.score)
// const historyExam2 = new Exam(-1, maestri);
var historyWork1 = new work_1["default"](20, maestri);
var historyWork2 = new work_1["default"](20, maestri);
var historyWork3 = new work_1["default"](20, maestri);
var historyExam1Result = new evaluationResult_1["default"](historyExam1, 9);
var historyExam2Result = new evaluationResult_1["default"](historyExam2, 8);
var historyExam3Result = new evaluationResult_1["default"](historyExam3, 10);
var historyExam4Result = new evaluationResult_1["default"](historyExam4, 9);
var historyExam5Result = new evaluationResult_1["default"](historyExam5, 6);
// console.log(historyExam1Result);
var historyWork1Result = new evaluationResult_1["default"](historyWork1, 20);
var historyWork2Result = new evaluationResult_1["default"](historyWork2, 18);
var historyWork3Result = new evaluationResult_1["default"](historyWork3, 12);
raphael.addEvaluationResult(historyExam1Result);
raphael.addEvaluationResult(historyExam2Result);
raphael.addEvaluationResult(historyExam3Result);
// raphael.addEvaluationResult(historyExam4Result);
// raphael.addEvaluationResult(historyExam5Result);
raphael.addEvaluationResult(historyWork1Result);
raphael.addEvaluationResult(historyWork2Result);
raphael.addEvaluationResult(historyWork3Result);
console.log(raphael);
var rEvaResul = raphael.evaluationsResults;
// console.log(rEvaResul);
