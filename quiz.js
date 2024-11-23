//set the name of the quiz
var QuizName = "Math Quiz"

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
const answer1 = new Answer("335",);
const answer2 = new Answer("456",);
const answer3 = new Answer("446",);
const answer4 = new Answer("426",);
const answer5 = new Answer("788",);
const answer6 = new Answer("778",);
const answer7 = new Answer("768",);
const answer8 = new Answer("758",);
const answer9 = new Answer("80",);
const answer10 = new Answer("400",);
const answer11 = new Answer("800",);
const answer12 = new Answer("4000",);

const answerbool1 = new AnswerBool(false);
const answerbool2 = new AnswerBool(false);
const answerbool3 = new AnswerBool(true);
const answerbool4 = new AnswerBool(false);
const answerbool5 = new AnswerBool(true);
const answerbool6 = new AnswerBool(false);
const answerbool7 = new AnswerBool(false);
const answerbool8 = new AnswerBool(false);
const answerbool9 = new AnswerBool(false);
const answerbool10 = new AnswerBool(true);
const answerbool11 = new AnswerBool(false);
const answerbool12 = new AnswerBool(false);

// Create a question with answers
const question1 = new Question("What is the sum of 130+125+191?", [answer1, answer2, answer3, answer4]);
const question2 = new Question("If we minus 712 from 1500, how much do we get?", [answer5, answer6, answer7, answer8]);
const question3 = new Question("50 times of 8 is equal to?", [answer9, answer10, answer11, answer12]);