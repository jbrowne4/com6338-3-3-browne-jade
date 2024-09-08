var questionsArr = [
    {
        question: 'JavaScript is the best language',
        answer: true
    },
    {
        question: 'HTML is a programming language',
        answer: false
    },
    {
        question: 'CSS stands for Cascading Style Sheets',
        answer: true
    },
    {
        question: 'Python is mainly used for web development',
        answer: false
    },
    {
        question: 'React is a JavaScript library',
        answer: true
    },
    {
        question: 'The University of Florida has a web design program',
        answer: true
    }
];

function runQuiz() {
    var score = 0; 
    for (var i = 0; i < questionsArr.length; i++) {
        var userAnswer = confirm(questionsArr[i].question); 

        if (userAnswer === questionsArr[i].answer) {
            score++; 
        }
    }

    var finalScore = Math.round((score / questionsArr.length) * 100);

    alert(`Your final score is ${finalScore}%`);
}