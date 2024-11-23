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
    constructor(text, isCorrect) {
        this.text = text; // text for the answer
        this.isCorrect = isCorrect; //boolean if the question is right or wrong
    }
}

// make answers
const answer1 = new Answer("335", false);
const answer2 = new Answer("456", false);
const answer3 = new Answer("446", true);
const answer4 = new Answer("426", false);
const answer5 = new Answer("788", true);
const answer6 = new Answer("778", false);
const answer7 = new Answer("768", false);
const answer8 = new Answer("758", false);
const answer9 = new Answer("80", false);
const answer10 = new Answer("400", true);
const answer11 = new Answer("800", false);
const answer12 = new Answer("4000", false);

// Create a question with answers
const question1 = new Question("What is the sum of 130+125+191?", [answer1, answer2, answer3, answer4]);
const question2 = new Question("If we minus 712 from 1500, how much do we get?", [answer5, answer6, answer7, answer8]);
const question3 = new Question("50 times of 8 is equal to?", [answer9, answer10, answer11, answer12]);