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
    constructor(text, isCorrect) {
        this.text = text; // text for the answer
        this.isCorrect = isCorrect; //boolean if the question is right or wrong
    }
}

// make answers
const answer1 = new Answer("example question 1", true);
const answer2 = new Answer("example question 2", false);
const answer3 = new Answer("example question 3", false);
const answer4 = new Answer("example question 4", false);
const answer5 = new Answer("example question 5", true);
const answer6 = new Answer("example question 6", false);
const answer7 = new Answer("example question 7", false);
const answer8 = new Answer("example question 8", false);

// Create a question with answers
const question1 = new Question("example question 1", [answer1, answer2, answer3, answer4]);
const question2 = new Question("example question 2", [answer5, answer6, answer7, answer8]);