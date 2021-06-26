export class Question {
    caption: string;
    answers: string[];
    correctIndex: number;
  
    constructor(caption: string, answers: string[], correctIndex: number){
        this.caption = caption;
        this.answers = answers;
        this.correctIndex = correctIndex;
      }
}
