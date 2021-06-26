import { Question } from "./question";
import { Exam } from "./exam";

const q1 = new Question("What was Harry's Patronus?", ["Stag","Frog","Milk","Dragon"],1);
const q2 = new Question("Who was Harry Potter's first crush?", ["Colin Creevey","Gilderoy Lockhart","Cho Chang","Neville Longbottom"],3);
const q3 = new Question("What position did Harry Potter play at Quidditch?", ["Chaser","Keeper","Seeker","Beater"],3);
const q4 = new Question("What relation was Sirius Black to Harry?", ["Unknown brother","Godfather","Best friend","Teacher"],2);


const exam = new Exam();
exam.addQuestion(q1);
exam.addQuestion(q2);
exam.addQuestion(q3);
exam.addQuestion(q4);

let score = exam.grade([1,3,3,2]);
console.log(score);

score = exam.grade([2,3,3,2]);
console.log(score);

score = exam.grade([2,3,4,2]);
console.log(score);



