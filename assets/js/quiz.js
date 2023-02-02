// Quiz event listeners
document.addEventListener('DOMContentLoaded', questionSetup);

document.addEventListener('DOMContentLoaded', getHighScore);

let submitAnswers = document.getElementById('submit');
submitAnswers.addEventListener('click', validateAnswers);

let tryAgain = document.getElementById('reset');
tryAgain.addEventListener('click', clearAnswers);


/**
 * The questions variable is an array containing the questions,
 * options, and answer for each question.
 */

const questions = [

    //Question 1
    {
        question: 'According to financial guru Dave Ramsey, what is the maximum proportion of your income that should go towards your rent or mortgage costs?',
        a: '30%',
        b: '10%',
        c: '50%',
        d: '25%',
        answer: 'd',
    },

    //Question 2
    {
        question: 'What was the British Gas estimated monthly gas bill for a 5-bed household in the UK for 2022?',
        a: '£90',
        b: '£155',
        c: '£124',
        d: '£189',
        answer: 'b',
    },

    //Question 3
    {
        question: 'In your budget, which expense should usually be the largest?',
        a: 'Housing',
        b: 'Car payments',
        c: 'Holidays',
        d: 'Gas and electricity bills',
        answer: 'a',
    },

    //Question 4
    {
        question: 'What is a good rule of thumb if you want to budget giving to charity?',
        a: '5% of monthly income',
        b: '6% of monthly income',
        c: '8% of monthly income',
        d: '10% of monthly income',
        answer: 'd',
    },

    //Question 5
    {
        question: 'If you are not meeting your savings target, what can you do to sustainably improve your finances?',
        a: 'Take on another part-time job',
        b: 'Start day trading on the stock market',
        c: 'Cut monthly expenses',
        d: 'Take out a loan',
        answer: 'c',
    },
];

let questionsSorted = [];
let highScore = 0;
let currentScore = 0;

/**
 * A function to randomise the order of the questions before when the user
 * starts the game.
 * 
 * Array sorting statement found on javascript.info. Link in readme.
 */
function questionSetup () {
    questionsSorted = questions.sort(() => Math.random() - 0.5);

    let firstQuestion = document.getElementById('first-question-text');
    firstQuestion.innerHTML = questionsSorted[0].question;
    let firstQuestionA = document.getElementById('1a');
    firstQuestionA.innerHTML = questionsSorted [0].a;
    let firstQuestionB = document.getElementById('1b');
    firstQuestionB.innerHTML = questionsSorted [0].b;
    let firstQuestionC = document.getElementById('1c');
    firstQuestionC.innerHTML = questionsSorted [0].c;
    let firstQuestionD = document.getElementById('1d');
    firstQuestionD.innerHTML = questionsSorted [0].d;

    let secondQuestion = document.getElementById('second-question-text');
    secondQuestion.innerHTML = questionsSorted[1].question;
    let secondQuestionA = document.getElementById('2a');
    secondQuestionA.innerHTML = questionsSorted [1].a;
    let secondQuestionB = document.getElementById('2b');
    secondQuestionB.innerHTML = questionsSorted [1].b;
    let secondQuestionC = document.getElementById('2c');
    secondQuestionC.innerHTML = questionsSorted [1].c;
    let secondQuestionD = document.getElementById('2d');
    secondQuestionD.innerHTML = questionsSorted [1].d;

    let thirdQuestion = document.getElementById('third-question-text');
    thirdQuestion.innerHTML = questionsSorted[2].question;
    let thirdQuestionA = document.getElementById('3a');
    thirdQuestionA.innerHTML = questionsSorted [2].a;
    let thirdQuestionB = document.getElementById('3b');
    thirdQuestionB.innerHTML = questionsSorted [2].b;
    let thirdQuestionC = document.getElementById('3c');
    thirdQuestionC.innerHTML = questionsSorted [2].c;
    let thirdQuestionD = document.getElementById('3d');
    thirdQuestionD.innerHTML = questionsSorted [2].d;

    let fourthQuestion = document.getElementById('fourth-question-text');
    fourthQuestion.innerHTML = questionsSorted[3].question;
    let fourthQuestionA = document.getElementById('4a');
    fourthQuestionA.innerHTML = questionsSorted [3].a;
    let fourthQuestionB = document.getElementById('4b');
    fourthQuestionB.innerHTML = questionsSorted [3].b;
    let fourthQuestionC = document.getElementById('4c');
    fourthQuestionC.innerHTML = questionsSorted [3].c;
    let fourthQuestionD = document.getElementById('4d');
    fourthQuestionD.innerHTML = questionsSorted [3].d;

    let fifthQuestion = document.getElementById('fifth-question-text');
    fifthQuestion.innerHTML = questionsSorted[4].question;
    let fifthQuestionA = document.getElementById('5a');
    fifthQuestionA.innerHTML = questionsSorted [4].a;
    let fifthQuestionB = document.getElementById('5b');
    fifthQuestionB.innerHTML = questionsSorted [4].b;
    let fifthQuestionC = document.getElementById('5c');
    fifthQuestionC.innerHTML = questionsSorted [4].c;
    let fifthQuestionD = document.getElementById('5d');
    fifthQuestionD.innerHTML = questionsSorted [4].d;

}

/**
 * A function to get and display the user's high score from session storage.
 */
function getHighScore() {
    let checkHighScore = sessionStorage.getItem('highscore');
    if (checkHighScore === undefined || checkHighScore === null) {
        highScore = 0;
    } else{
        highScore = checkHighScore;
    }
    displayHighScore();
}

/**
 * A function that displays the user's high score when
 */
function displayHighScore() {
    let scoreNumber = `<p>${highScore}</p>`;
    const scoreDiv = document.createElement('div');
    scoreDiv.classList.add('high-score-number');
    scoreDiv.innerHTML = scoreNumber;
    const scoreContainer = document.getElementById('high-score');
    scoreContainer.appendChild(scoreDiv);
}

/** A function to check that the users have checked a box for each question
 * before they submit.
 * 
 * Document querySelector solution found on GeeksforGeeks. Link in readme.
 */
function validateAnswers() {

    for (let i = 0; i <= 4; i++) {
        let checkValid = document.querySelector(`input[name = "${i}"]:checked`);
        if (checkValid === null) {
            alert('You have left a blank answer. Please answer all questions before checking your answers.');
        } else {
            console.log(`Valid answer ${i + 1}`);
        }
    }
    checkAnswers();
}

/**
 * A function to check all the answers given by the user
 * to see how many they got right.
 */
function checkAnswers() {
    let marksText;
    for(let k = 0; k <= 4; k++) {
        let ansCheck = document.querySelector(`input[name = "${k}"]:checked`);
        if (ansCheck.value === questionsSorted[k].answer) {
            console.log(`Hooray you got question ${k + 1} right`);
            marksText = `<p>Hooray you got question ${k + 1} right</p>`;
            function addMarksCorrect() {
                const correctMarks = document.createElement('div');
                correctMarks.classList.add('correct');
                correctMarks.innerHTML = marksText;
                let questionBox = document.getElementById(`${k}`);
                questionBox.appendChild(correctMarks);
            }
            addMarksCorrect();
            currentScore += 1;
        } else {
            marksText = `<p>Uh oh... You got question ${k + 1} wrong. The correct answer was ${questionsSorted[k].answer}</p>`;
            function addMarksIncorrect() {
                const incorrectMarks = document.createElement('div');
                incorrectMarks.classList.add('incorrect');
                incorrectMarks.innerHTML = marksText;
                let questionBox = document.getElementById(`${k}`);
                questionBox.appendChild(incorrectMarks);
            }
            addMarksIncorrect();
            console.log(`Uh oh... You got question ${k + 1} wrong. The correct answer was ${questionsSorted[k].answer}`);
        }
    }
    setHighScore();
}

/**
 * A function to set the user's new high score if it exceeds
 * the previous high score and store it in session storage. 
 */
function setHighScore () {
    if (currentScore <= highScore) {
        alert(`You got ${currentScore} out of 5 questions right. Your high score is ${highScore}`);
    } else {
        alert(`Congratulations! You beat your high score of ${highScore}. Your new high score is ${currentScore}`);
        sessionStorage.setItem('highscore', currentScore);
    }

}

/**
 * A function to clear the correct/incorrect feedback html
 * so that the user can try the quiz again.
 */
function clearAnswers() {
    location.reload();
}
