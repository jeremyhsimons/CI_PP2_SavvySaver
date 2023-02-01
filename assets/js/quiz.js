document.addEventListener('DOMContentLoaded', questionSetup)


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
let highScore;

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

}

/**
 * A function to get and display the user's high score from session storage.
 */
function getHighScore() {

}

/** A function to check that the users have checked a box for each question
 * before they submit.
 */
function validateAnswers() {

}

/**
 * A function to check all the answers given by the user
 * to see how many they got right.
 */
function checkAnswers() {

}

/**
 * A function to set the user's new high score if it exceeds
 * the previous high score and store it in session storage. 
 */
function setHighScore () {

}
