//set the name of the quiz
var QuizName = "In the small town of Eldenwick, nestled in the shadow of the Mistspire Mountains, strange rumors had been circulating for decades. Locals spoke of an ancient artifact hidden deep within the mountains—a crystal capable of bending time itself. Known as the Crystal of Eternity, it was said to grant unimaginable power to anyone who possessed it. Yet, with such power came a grave curse: the crystal would show its wielder the future, but never allow them to change it.Lina, a curious and determined adventurer, had always been drawn to the tales of the crystal. After years of research and whispers in forgotten libraries, she discovered a half-burned map hinting at the crystal's location. On a cold autumn morning, she packed her gear, leaving Eldenwick behind as she ventured into the mountains.The journey was perilous. The Mistspire Mountains were known for their unpredictable weather and treacherous cliffs. On her third day, Lina stumbled across an ancient stone bridge guarded by a riddle etched into its surface: To pass beyond, the truth you must find. Time moves forward, but leaves what behind? Lina pondered the question for hours. Finally, she whispered, Memories, and the bridge rumbled to life, allowing her passage. Beyond the bridge lay a cave glowing faintly with an eerie blue light. Inside, the walls shimmered as if coated with liquid stars. In the center of the cavern stood a pedestal, and atop it sat the Crystal of Eternity. It pulsed gently, filling the air with a hum that resonated in Lina's chest. As she approached, the crystal began to glow brighter, and an image materialized within its core: Lina herself, older, sitting in Eldenwick, surrounded by people in mourning. A voice echoed in the cavern, soft yet firm. The future cannot be changed, but your choices shape the journey. Take the crystal, and bear its weight—or leave it, and walk another path. Lina hesitated. The future shown to her was grim, yet her heart burned with curiosity. Was it worth the risk? She reached out her hand, trembling, as the scene faded into darkness."

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
const answer1 = new Answer("The Jewel of Time",);
const answer2 = new Answer("The Crystal of Eternity",);
const answer3 = new Answer("The Stone of Ages",);
const answer4 = new Answer("The Orb of Fate",);
const answer5 = new Answer("In a library in Eldenwick",);
const answer6 = new Answer("In a cave in the Mistspire Mountains",);
const answer7 = new Answer("In a half-burned book",);
const answer8 = new Answer("On the stone bridge",);
const answer9 = new Answer("The future",);
const answer10 = new Answer("Time's path",);
const answer11 = new Answer("Memories",);
const answer12 = new Answer("Choices",);
const answer13 = new Answer("Herself as a child",);
const answer14 = new Answer("A battle in Eldenwick",);
const answer15 = new Answer("Her own grim future",);
const answer16 = new Answer("The Mistspire Mountains crumbling",);
const answer17 = new Answer("Whether to return to Eldenwick or stay in the mountains",);
const answer18 = new Answer("Whether to take the crystal or leave it behind",);
const answer19 = new Answer("Whether to solve another riddle or abandon the quest",);
const answer20 = new Answer("Whether to destroy the crystal or guard it forever",);

const answerbool1 = new AnswerBool(false);
const answerbool2 = new AnswerBool(true);
const answerbool3 = new AnswerBool(false);
const answerbool4 = new AnswerBool(false);
const answerbool5 = new AnswerBool(false);
const answerbool6 = new AnswerBool(false);
const answerbool7 = new AnswerBool(true);
const answerbool8 = new AnswerBool(false);
const answerbool9 = new AnswerBool(false);
const answerbool10 = new AnswerBool(true);
const answerbool11 = new AnswerBool(false);
const answerbool12 = new AnswerBool(false);
const answerbool13 = new AnswerBool(false);
const answerbool14 = new AnswerBool(false);
const answerbool15 = new AnswerBool(true);
const answerbool16 = new AnswerBool(false);
const answerbool17 = new AnswerBool(false);
const answerbool18 = new AnswerBool(true);
const answerbool19 = new AnswerBool(false);
const answerbool20 = new AnswerBool(false);


// Create a question with answers
const question1 = new Question("What is the name of the artifact Lina seeks?", [answer1, answer2, answer3, answer4]);
const question2 = new Question("Where does Lina find the map hinting at the crystal's location?", [answer5, answer6, answer7, answer8]);
const question3 = new Question("What does the riddle on the stone bridge ask about?", [answer9, answer10, answer11, answer12]);
const question4 = new Question("What does Lina see inside the crystal?", [answer13, answer14, answer15, answer16]);
const question5 = new Question("What choice does Lina face in the cavern?", [answer17, answer18, answer19, answer20]);