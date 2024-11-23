let quizQuestions = [];
let quizAnswers = [];
let correctAnswers = [];

window.createQuiz = function() {
    // Get the quiz title with error checking
    let titleElement = document.querySelector('.quiz-title h1');
    let title = '';
    
    if (titleElement) {
        title = titleElement.textContent;
    } else {
        console.warn('Quiz title element not found');
        title = 'Untitled Quiz'; // Default title
    }
    
    // Store it in localStorage
    localStorage.setItem('quizTitle', title);
    console.log('Quiz title saved:', title);
    
    quizQuestions.length = 0;
    quizAnswers.length = 0;

    // Get all question containers
    const questionContainers = document.querySelectorAll('.quiz-question');
    
    questionContainers.forEach(container => {
        // Get question input for this container
        const questionInput = container.querySelector('input[type="text"]');
        if (questionInput) {
            quizQuestions.push(questionInput.value);
            
            // Get answer inputs for this question
            const answerInputs = container.querySelectorAll('.answer input');
            let questionAnswers = [];
            
            answerInputs.forEach(input => {
                if (input && input.value) {
                    questionAnswers.push(input.value);
                }
            });
            
            if (questionAnswers.length > 0) {
                quizAnswers.push(questionAnswers);
            }
        }
    });

    // Save quiz answers to localStorage
    localStorage.setItem('quizAnswers', JSON.stringify(quizAnswers));
    console.log('Quiz answers saved:', quizAnswers);
    // Save quiz questions to localStorage
    localStorage.setItem('quizQuestions', JSON.stringify(quizQuestions));
    console.log('Quiz questions saved:', quizQuestions);
    // Save correct answers to local storage
    localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
    console.log('Correct answers saved:', correctAnswers);
    // Get quiz description
    const descriptionElement = document.querySelector('.quiz-title input[placeholder="Quiz Description"]');
    let description = '';
    //Get quiz Title
    titleElement = document.querySelector('#quizTitle');
    if (titleElement) {
        title = titleElement.value;
    } else {
        console.warn('Quiz title element not found');
        title = 'Untitled Quiz'; // Default title
    }
    // Skip re-declaring titleElement since it was already declared above
    if (descriptionElement) {
        description = descriptionElement.value;
    } else {
        console.warn('Quiz description element not found');
        description = 'No description provided'; // Default description
    }

    // Save quiz description to localStorage
    localStorage.setItem('quizDescription', description);
    console.log('Quiz description saved:', description);
    
}

window.startQuiz = function() {
    // Get all quiz questions
    const questions = document.querySelectorAll('.quiz-question h2');
    
    // Get stored questions from localStorage
    const storedQuestions = JSON.parse(localStorage.getItem('quizQuestions')) || [];
    
    // Update questions with stored quiz questions
    questions.forEach((question, index) => {
        if (storedQuestions[index]) {
            question.textContent = storedQuestions[index];
        }
    });

    // Get stored answers from localStorage
    const storedAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || [];
    const storedCorrectAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];
    correctAnswers = storedCorrectAnswers;
    
    // Get all option buttons
    const options = document.querySelectorAll('.quiz-question .option');
    
    // Update options with stored answers
    let optionIndex = 0;
    storedAnswers.forEach((questionAnswers, qIndex) => {
        questionAnswers.forEach((answer, aIndex) => {
            if (options[optionIndex]) {
                options[optionIndex].textContent = answer;
            }
            optionIndex++;
        });

        // Update correct answer display for this question
        const questionElement = document.querySelector(`.quiz-question[data-index="${qIndex}"]`);
        if (questionElement) {
            const correctAnswerDisplay = questionElement.querySelector('h3');
            if (correctAnswerDisplay && storedCorrectAnswers[qIndex]) {
                correctAnswerDisplay.textContent = `Correct Answer: ${storedCorrectAnswers[qIndex]}`;
            }
        }
    });

    // Hide start button and show quiz
    const startButton = document.querySelector('.quiz-title button');
    const quizContainer = document.querySelector('.quiz-container');
    
    if (startButton) {
        startButton.style.display = 'none';
    }
    
    if (quizContainer) {
        quizContainer.classList.remove('active');
    }

    // Start timer if it exists
    if (typeof startTimer === 'function') {
        startTimer();
    }
}

window.setCorrectAnswer = function(button) {
    const correctAnswer = button.previousElementSibling;
    correctAnswer.textContent = button.textContent;

    // Remove highlight from any previously selected correct answers
    // Get all correct buttons in the same question group
    const questionGroup = button.closest('.quiz-question');
    const correctButtons = questionGroup.querySelectorAll('.correct-btn');
    
    // Reset all buttons in this question to default style
    correctButtons.forEach(btn => {
        btn.style.backgroundColor = 'var(--white)';
        btn.style.transform = 'none';
        btn.style.boxShadow = 'none';
    });

    // Highlight the selected correct answer button
    button.style.backgroundColor = 'var(--dark-gray)';
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';

    // Store the correct answer
    const questionIndex = button.closest('.quiz-question').dataset.index;
    const answerIndex = Array.from(button.parentElement.children)
        .filter(el => el.tagName === 'BUTTON')
        .indexOf(button);
    
    if (answerIndex !== undefined) {
        correctAnswers[questionIndex] = answerIndex.toString();
        // Save to localStorage immediately when correct answer is set
        localStorage.setItem('correctAnswers', JSON.stringify(correctAnswers));
        // Also save the actual text of the correct answer
        const correctAnswerTexts = JSON.parse(localStorage.getItem('correctAnswerTexts')) || {};
        correctAnswerTexts[questionIndex] = button.textContent;
        localStorage.setItem('correctAnswerTexts', JSON.stringify(correctAnswerTexts));
        console.log('Correct answers saved:', correctAnswers);
        console.log('Correct answer texts saved:', correctAnswerTexts);
    }
}

const answersList = [];


window.checkCorrect = function(selectedAnswer) {
    // Get all buttons in the same question group
    const questionGroup = selectedAnswer.closest('.quiz-question');
    const allButtons = questionGroup.querySelectorAll('.option');
    
    // Reset all buttons to default style
    allButtons.forEach(button => {
        button.style.backgroundColor = 'var(--light-gray)';
        button.style.transform = 'none';
        button.style.boxShadow = 'none';
    });

    // Style the selected answer
    selectedAnswer.style.backgroundColor = 'var(--dark-gray)';
    selectedAnswer.style.transform = 'translateY(-2px)';
    selectedAnswer.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';

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
    
    // Calculate percentage score with 1 decimal place
    const percentage = Math.round((score / correctAnswers.length) * 100);
    
    // Save final score to localStorage
    const quizResults = {
        score: score,
        total: correctAnswers.length,
        percentage: percentage
    };
    localStorage.setItem('quizResults', JSON.stringify(quizResults));
    
    // Display results
    console.log(`You scored ${score} out of ${correctAnswers.length} (${percentage}%)`);
    document.getElementById('score').textContent = score;
    document.getElementById('total').textContent = correctAnswers.length;
    document.getElementById('percentage').textContent = percentage;
    
    // Hide quiz container
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
        quizContainer.classList.add('active');
        const tryAgainBtn = document.querySelector('.try-again-btn');
        if (tryAgainBtn) {
            tryAgainBtn.style.display = 'block';
        }
    }
}

let timer;
let seconds = 0;
let minutes = 0;

window.startTimer = function() {
    timer = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        
        // Format time with leading zeros
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
        
        // Update timer display
        document.getElementById('time').textContent = 
            formattedMinutes + ':' + formattedSeconds;
    }, 1000);
}

window.stopTimer = function() {
    clearInterval(timer);
}

