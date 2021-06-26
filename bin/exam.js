"use strict";
exports.__esModule = true;
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questionsArray = [];
    }
    Exam.prototype.addQuestion = function (question) {
        this.questionsArray.push(question);
    };
    Exam.prototype.print = function () {
        for (var _i = 0, _a = this.questionsArray; _i < _a.length; _i++) {
            var question = _a[_i];
            console.log(question); // 1, "string", false
        }
    };
    Exam.prototype.grade = function (answers) {
        var num_correct_answers = 0;
        var total_questions_num = 0;
        for (var _i = 0, _a = this.questionsArray; _i < _a.length; _i++) {
            var question = _a[_i];
            if (question.correctIndex === answers[total_questions_num]) {
                num_correct_answers++;
            }
            total_questions_num++;
        }
        return (total_questions_num > 0) ? ((num_correct_answers * 100) / total_questions_num) : 0;
    };
    return Exam;
}());
exports.Exam = Exam;
