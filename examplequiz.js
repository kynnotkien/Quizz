//set the name of the quiz
var QuizName = "example name"

// Question class
class Question {
    constructor(questionText, answers) {
        this.questionText = questionText; // The text of the question
        this.answers = answers; // An array of Answer objects
    }
}

// Answer class
class Answer {
    constructor(text) {
        this.text = text; // text for the answer
    }
}

class AnswerBool {
    constructor(isCorrect) {
        this.isCorrect = isCorrect; //boolean if the question is right or wrong
    }
}

// make answers
const answer1 = new Answer("example answer1");
const answer2 = new Answer("example answer2");
const answer3 = new Answer("example answer3");
const answer4 = new Answer("example answer4");
const answer5 = new Answer("example answer5");
const answer6 = new Answer("example answer6");
const answer7 = new Answer("example answer7");
const answer8 = new Answer("example answer8");

const answerbool1 = new AnswerBool(true);
const answerbool2 = new AnswerBool(false);
const answerbool3 = new AnswerBool(false);
const answerbool4 = new AnswerBool(false);
const answerbool5 = new AnswerBool(true);
const answerbool6 = new AnswerBool(false);
const answerbool7 = new AnswerBool(false);
const answerbool8 = new AnswerBool(false);

// Create a question with answers
const question1 = new Question("example question 1", [answer1, answer2, answer3, answer4]);
const question2 = new Question("example question 2", [answer5, answer6, answer7, answer8]);