import Evaluation from "./evaluation";
import Teacher from "./teacher";

export default class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher)
  }

  validateScore(score: number): void {
    if(score < 0) {
        throw new Error("A pontuação não pode ser negativa");
    };

    if(score > 50) {
        throw new Error("Os trabalhos não podem valer mais que 50 pontos");
    };
  }
}