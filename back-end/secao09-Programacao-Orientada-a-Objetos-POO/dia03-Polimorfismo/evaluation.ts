import Teacher from "./teacher";

export enum EvaluationType {
    TEST = "test",
    HOMEWORK = "homework"
}

export default class Evaluation {
    private _score: number;
    private _teacher: Teacher;
    private _type: EvaluationType;

    constructor(score: number, teacher: Teacher, type: EvaluationType) {
        this._teacher = teacher;
        this._type = type;
        this.validateScore(score);
    };

    get score() {
        return this._score;
    };

    set score(value: number) {
        this.validateScore(value);
    };

    get teacher() {
        return this._teacher;
    };

    set teacher(teacher: Teacher) {
        this._teacher = teacher;
    };

    get type () {
        return this._type;
    };

    set type(type: EvaluationType) {
        this._type = type;
    }

    validateScore(score: number) {
        if(score < 0) {
            throw new Error("A pontuação não pode ser negativa");
        };

        if(this._type === EvaluationType.TEST && score > 25) {
            throw new Error("As provas não podem valer mais que 25 pontos");
        };

        if(this._type === EvaluationType.HOMEWORK && score > 50) {
            throw new Error("Os trabalhos não podem valer mais que 50 pontos");
        };
        this._score = score;
    }
}