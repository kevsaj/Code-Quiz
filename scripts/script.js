var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {

                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                    letter + ': ' +
                    questions[i].answers[letter] +
                    '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function submitButton(questions, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {

            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            }
            else {
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }


    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
        submitButton(questions, quizContainer, resultsContainer);
    }
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
        previousButton.style.display = 'none';
    } else {
        previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
    } else {
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}


function startTimer() {
    var tobj = document.getElementById("timespent")
    var t = "0:00";
    var s = 00;
    var d = new Date();
    var timeint = setInterval(function () {
        s += 1;
        d.setMinutes("0");
        d.setSeconds(s);
        min = d.getMinutes();
        sec = d.getSeconds();
        if (sec < 10) sec = "0" + sec;
        document.getElementById("timespent").value = min + ":" + sec;
    }, 1000);
    tobj.value = t;
}
if (window.addEventListener) {
    window.addEventListener("load", startTimer);
} else if (window.attachEvent) {
    window.attachEvent("onload", startTimer);
}

// Pagination
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
let currentSlide = 0;

showSlide(currentSlide);

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
submitButton.addEventListener("click", submit);