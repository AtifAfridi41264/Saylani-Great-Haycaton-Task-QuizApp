
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Define correct answers for each question
    var correctAnswers = {
        question1: 'optionA',
        question2: 'optionB',
        question3: 'optionA',
        question4: 'optionB',
        question5: 'optionA',
        question6: 'optionA',
        question7: 'optionA',
        question8: 'optionC',
        question9: 'optionB',
        question10: 'optionB'
    };

    // Get selected answers
    var selectedAnswers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value,
        question6: document.querySelector('input[name="question6"]:checked').value,
        question7: document.querySelector('input[name="question7"]:checked').value,
        question8: document.querySelector('input[name="question8"]:checked').value,
        question9: document.querySelector('input[name="question9"]:checked').value,
        question10: document.querySelector('input[name="question10"]:checked').value
    };

    // Compare selected answers with correct answers
    var marks = 0;
    for (var question in correctAnswers) {
        if (selectedAnswers[question] === correctAnswers[question]) {
            marks++;
        }
    }

    // Store marks in session storage
    sessionStorage.setItem('marks', marks);

    // Redirect to result page
    window.location.href = 'result.html';
});
