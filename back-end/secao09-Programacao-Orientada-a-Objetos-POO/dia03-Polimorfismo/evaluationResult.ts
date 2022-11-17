import Evaluation from "./evaluation";

export default class EvaluationResult {
    private _evaluation: Evaluation;
    private _score: number;

    constructor(evaluation: Evaluation, score: number) {
        this._evaluation = evaluation;
        this.validateScore(score)
    };

    get evaluation() {
        return this._evaluation
    };

    get score() {
        return this._score
    };

    set evaluation(evaluation: Evaluation) {
        this._evaluation = evaluation;
    };

    set score(score: number) {
    this.validateScore(score);
    };

    validateScore(score: number) {
        if(score < 0) throw new Error("A nota não pode ser negativa.");
        
        if(score > this._evaluation.score ) throw new Error("A nota não pode ser superior à nota da avaliaçao.");

        this._score = score;
    };
};