// Create an array to store all answers
const answersList = [];
// Get the question element
const questionElement = document.querySelector('.quiz-question[data-index]');
// Get the data-index attribute value and question ID
const questionIndex = questionElement.getAttribute('data-index');
const questionId = questionElement.getAttribute('id');


// Make the function globally accessible by adding it to the window object
window.checkCorrect = function(selectedAnswer) {
    // Get the answer index from the data-index attribute
    const answerIndex = selectedAnswer.getAttribute('data-index');
    
    // Store the selected answer ID instead of text content
    answersList[questionIndex] = selectedAnswer.id;
    // Visual feedback that answer was selected
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => option.classList.remove('selected'));
    selectedAnswer.classList.add('selected');
    console.log(answersList);
}

