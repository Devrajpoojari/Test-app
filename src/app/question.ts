export class Question {

    constructor(public questionId: number, public questionOptions: string[], public quesionTitle: string, public questionAnswer: number,
        public questionMarks: number, public chosenAnswer: number, public marksScored: number) { }
}
