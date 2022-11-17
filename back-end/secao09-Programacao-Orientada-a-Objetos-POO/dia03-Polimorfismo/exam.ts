import Evaluation from "./evaluation";
import Teacher from "./teacher";

export default class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher)
    this.validateScore(score)
  }

  validateScore(score: number): void {
    if(score < 0) {
        throw new Error("A pontuação não pode ser negativa");
    };

    if(score > 25) {
        throw new Error("As provas não podem valer mais que 25 pontos");
    };

    super.score === score;   
  }
}