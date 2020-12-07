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

    }


    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
        submitButton(questions, quizContainer, resultsContainer);
    }
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



previousButton.addEventListener("click");
nextButton.addEventListener("click");
submitButton.addEventListener("click");