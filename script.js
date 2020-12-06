function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        
    }

    function showResults(questions, quizContainer, resultsContainer) {
    
    }

    
    showQuestions(questions, quizContainer);

    
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}

var myQuestions = [
	{
		question: test,
		answers: {
            a: '1',
			b: '2',
			c: '3'
		},
		correctAnswer: 'b'
	},
];


previousButton.addEventListener("click");
nextButton.addEventListener("click");
submitButton.addEventListener("click");