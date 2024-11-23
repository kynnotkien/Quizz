// Create an array to store all answers
const answersList = [null, null, null];
const correctAnswers = ['0', '1', '2'];
// Get the question element
const questionElement = document.querySelector('.quiz-question[data-index]');
// Get the data-index attribute value and question ID
const questionIndex = questionElement.getAttribute('data-index');
const questionId = questionElement.getAttribute('id');

// Make the function globally accessible by adding it to the window object
window.checkCorrect = function(selectedAnswer) {
    // Get the answer index from the data-index attribute
    const answerIndex = selectedAnswer.getAttribute('id');
    
    // Store the selected answer ID instead of text content
    answersList[answerIndex] = selectedAnswer.dataset.index;
    // Visual feedback that answer was selected
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => option.classList.remove('selected'));
    selectedAnswer.classList.add('selected');
    console.log(answersList);
    console.log(correctAnswers);
}

window.checkQuiz = function() {
    // Initialize score counter
    let score = 0;
    
    // Compare each answer with correct answers
    for (let i = 0; i < correctAnswers.length; i++) {
        if (answersList[i] === correctAnswers[i]) {
            score++;
        }
    }
    
    // Calculate percentage score
    const percentage = (score / correctAnswers.length) * 100;
    
    // Display results
    console.log(`You scored ${score} out of ${correctAnswers.length} (${percentage}%)`);
}

