//Event listener to pre-populate the calculator form when the DOM loads.

document.addEventListener("DOMContentLoaded", function fillForm() {
    let fields = document.getElementsByTagName('input');
    let placeholders = [1500, 200, 50, 100, 150, 300, 1, 12, 8000];

    fields[0].value = placeholders[0];
    fields[1].value = placeholders[1];
    fields[2].value = placeholders[2];
    fields[3].value = placeholders[3];
    fields[4].value = placeholders[4];
    fields[5].value = placeholders[5];
    fields[6].value = placeholders[6];
    fields[7].value = placeholders[7];
    fields[8].value = placeholders[8];
})

//Event listener to handle the form submission
let calculate = document.getElementById('calc-submit');
calculate.addEventListener('click', getInputs);

let printResult = document.getElementById('print');
calculate.addEventListener('click', printResult);

/**
 * A function to get all the user's inputs from the form and store them
 * in an array called inputs.
 * This function is called by form submission event.
 */
let inputs = [];

function getInputs(event) {
    event.preventDefault();
    let fields = document.getElementsByTagName('input');

    inputs.push(fields[0].value);
    inputs.push(fields[1].value);
    inputs.push(fields[2].value);
    inputs.push(fields[3].value);
    inputs.push(fields[4].value);
    inputs.push(fields[5].value);
    inputs.push(fields[6].value);
    inputs.push(fields[7].value);
    inputs.push(fields[8].value); 

    calcSaving(inputs);
    checkRecommemndations();
}

/**
 * A function to calculate the user's projected savings.
 * This function is called after the the inputs array is filled.
 */
function calcSaving(inputs) {

    if (inputs[7] < 1) {
        alert("You need to enter a valid number of months to the timescale field.")
    } else {

        let monthlySum = (inputs[0] - inputs[1] - inputs[2] - inputs[3] - inputs[4] - inputs[5]) * 1000;
        let interest = (1 + inputs[6] / 100) * 1000;
        let total = 0;

        let i = 1

        do {
            i = i + 1;
            total = ((total + monthlySum) * interest) / 1000;
        } while (i <= inputs[7]);

        let actualSaving = total / 1000;

        //code on line directly below this comment is adapted from a 
        //suggestion by Brian Ustas on
        //Stack Overflow about how to round numbers to 2dp reliably.
        //See credits section of readme for link to page.
        actualSaving = Math.round((actualSaving + Number.EPSILON) * 100) / 100;
        console.log(actualSaving);
        checkSaving(actualSaving);
    }
}

/**
 * A function to check whether the user's projected saving
 * is greater than or equal to the savings goal.
 */
function checkSaving(actualSaving) {
    function addRecommendation (html) {
        let recommendation = document.createElement('div')
        recommendation.classList.add()

    }

    let html = `<p></p>`;

    if (actualSaving >= inputs[8]) {
        alert("Congratulations! You will meet your savings goal");
    } else if (actualSaving < inputs[8]) {
        alert("Sorry, you will not meet your savings target. Here are some suggestions for how to meet it:");
        calcSavingChanges(actualSaving);
    } else {
        // Code for error handling borrowed from LoveMaths walkthrough.
        alert(`Unknown value ${actualSaving} Please fill in the form and try again.`);
        throw `Unknown value ${actualSaving}`
    }
    //inputs = [];
}

/**
 * A function that goes through the user's inputs and calculates
 * the revised figures needed for the user to meet their
 * savings goal.
 * 
 * This function is only called if the checkSaving function finds
 * that the user's savings are below the user's goal.
 */
function calcSavingChanges() {

}

/**
 * A function that checks each of the user's inputs against
 * pre-determined recommended figures and outputs HMTL accordingly.
 * 
 * E.g. If the user's rent > 25% of monthly income
 * a warning will appear suggesting that they minimise this cost.
 * 
 * This function is called after the Inputs array is filled.
 */
function checkRecommemndations() {

    let html = `<p>Hello world</p>`;
    // functions to add a div child to the DOM after results are generated.
    function addGoodRecommendation () {
        let recommendation = document.createElement('div')
        recommendation.classList.add('good')
        recommendation.innerHTML = html;
        let recommendationDiv = document.getElementById('recommendations');
        recommendationDiv.appendChild(recommendation);
    }

    // first check to see if rent is under 25% of the income, or over 50%.
    let rent = inputs[1];
    let pay = inputs [0];

    console.log(rent);
    console.log(pay);

    if (rent > (pay / 4) && rent < (pay / 2)) {
        console.log("Your rent/mortgage is a little high. It's recommended that your accommodation payments do not exceed 25% of your take-home pay.")
    } else if (rent > pay / 2) {
        console.log("Your rent/mortgage is VERY high. It's recommended that your accommodation payments do not exceed 25% of your take-home payYou should look for an alternative deal or increase your income as soon as possible.")
    } else if (rent < pay / 4) {
        addGoodRecommendation();
        console.log("Your rent/mortgage payments are healthy proportional to your income.")
    } else {
        alert(`Unknown value ${rent} Please fill in the form and try again.`);
        throw `Unknown value ${rent}`
    }

    //clears the data so that the user can resubmit with new data.
    inputs = [];
}

function printPageResult () {

}
