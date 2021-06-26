import { Question } from "./question";

export class Exam {
    private questionsArray: Question[] = [];

    addQuestion(question:Question): void{
        this.questionsArray.push(question);
    }

    print(): void {
        for (let question of this.questionsArray) {
            console.log(question); // 1, "string", false
        }
    }

    grade(answers: number[]): number {
        let num_correct_answers = 0;
        let total_questions_num = 0;

        for (let question of this.questionsArray) {
            if(question.correctIndex === answers[total_questions_num]){
                num_correct_answers++;
            }
            total_questions_num++;
        }
        return (total_questions_num > 0)? ((num_correct_answers*100)/total_questions_num) : 0;
    }
}
