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

//let printResult = document.getElementById('print');
//calculate.addEventListener('click', printPageResult);

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

    clearDom();
    calcSaving(inputs);
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
            i += 1;
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
    let html = `<p></p>`;
    function addResults() {
        let resultsDiv = document.createElement('div')
        resultsDiv.classList.add('results-main')
        resultsDiv.innerHTML = html;
        let resultsMain = document.getElementById('results');
        resultsMain.appendChild(resultsDiv);
    }

    if (actualSaving >= inputs[8]) {
        html = `<h2>RESULTS:</h2>
                <h3>Congratulations! You will meet your savings goal of £${inputs[8]}.</h3>
                <p>With a:</p>
                <ul>
                    <li>Monthly income of £${inputs[0]}</li>
                    <li>Monthly rent/mortgage payment of £${inputs[1]}</li>
                    <li>Monthly car cost of £${inputs[2]}</li>
                    <li>Monthly utilities bill of £${inputs[3]}</li>
                    <li>Monthly charitable giving of £${inputs[4]}</li>
                    <li>Monthly expenses of £${inputs[5]}</li>
                    <li>Bank interest rate of ${inputs[6]}%</li>
                    <li>Over ${inputs[7]} months</li>
                </ul>
                <h3>You will save <em>£${actualSaving}</em></h3>`
        addResults();
        console.log("results: saving success.")
    } else if (actualSaving < inputs[8]) {
        html = `<h2>RESULTS:</h2>
                <h3>Sorry, you will not meet your savings goal of £${inputs[8]}.</h3>
                <p>With a:</p>
                <ul>
                    <li>Monthly income of £${inputs[0]}</li>
                    <li>Monthly rent/mortgage payment of £${inputs[1]}</li>
                    <li>Monthly car cost of £${inputs[2]}</li>
                    <li>Monthly utilities bill of £${inputs[3]}</li>
                    <li>Monthly charitable giving of £${inputs[4]}</li>
                    <li>Monthly expenses of £${inputs[5]}</li>
                    <li>Bank interest rate of ${inputs[6]}%</li>
                    <li>Over ${inputs[7]} months</li>
                </ul>
                <h3>You will only save <em>£${actualSaving}.</em>
                Here are some suggestions for how to meet your target:</h3>`
        addResults();
        console.log("results: saving failure.")
        calcSavingChanges(actualSaving);
    } else {
        // Code for error handling borrowed from LoveMaths walkthrough.
        alert(`Unknown value ${actualSaving} Please fill in the form and try again.`);
        throw `Unknown value ${actualSaving}`;
    }
    checkRecommemndations();
}

/**
 * A function that goes through the user's inputs and calculates
 * the revised figures needed for the user to meet their
 * savings goal.
 * 
 * This function is only called if the checkSaving function finds
 * that the user's savings are below the user's goal.
 */
function calcSavingChanges(actualSaving) {

    let changeTitleText = "CHANGES YOU COULD MAKE TO YOUR SAVING PLAN:";
    let changeText = `<p></p>`;
    let changeSection = document.getElementById('changes');

    function addChangeTitle() {
        let changeTitle = document.createElement('h2');
        changeTitle.classList.add('change-title');
        changeTitle.innerHTML = changeTitleText;
        changeSection.appendChild(changeTitle);
    }

    function addChange() {
        let newChange = document.createElement('div');
        newChange.classList.add('change-text');
        newChange.innerHTML = changeText;
        changeSection.appendChild(newChange);
    }

    // code to check how many months needed to reach the savings goal
    // at current rate of saving. k = no. of months.
    let monthlySum = (inputs[0] - inputs[1] - inputs[2] - inputs[3] - inputs[4] - inputs[5]) * 1000;
    let interest = (1 + inputs[6] / 100) * 1000;
    let goalTotal = inputs[8] * 1000; 
    let k = 0;

    do {
        k += 1;
        goalTotal = (goalTotal / interest) * 1000 - monthlySum;
    } while (goalTotal > 0);

    changeText = `<p>If you save for <strong>${k}</strong> months you will achieve your goal.</p>`;
    addChangeTitle();
    addChange();

    // code to check how much the user would need to cut from total expenses.
    goalTotal = inputs[8] * 1000;
    let goalMonthlySum = (goalTotal/interest/inputs[7]) * 1000;
    let deficit = (goalMonthlySum - monthlySum) / 1000;
    //Brian Ustas code.
    deficit = Math.round((deficit + Number.EPSILON) * 100) / 100;

    changeText = `<p>Alternatively, you could try to cut your total monthly costs. 
                 You would need to save <strong>£${deficit}</strong> per month in addition to what you
                 currently save in order to meet your goal.</p>`
    addChange();

    // code to check what interest they have earned vs what interest they need to earn
    // to achieve their savings goal.
    let goalInterestEarned = (goalTotal - (inputs[7] * monthlySum)) / 1000;
    let actualInterestEarned = actualSaving - (inputs[7] * monthlySum) / 1000 ;
    // Brian Ustas code.
    actualInterestEarned = Math.round((actualInterestEarned + Number.EPSILON) * 100) / 100;

    changeText = `<p>Additionally, with your current bank account 
                  you are only earning <strong>£${actualInterestEarned}</strong>
                  in interest. If you wanted to achieve your savings goal by increasing
                  interest earnings, you would need to earn 
                  <strong>£${goalInterestEarned}.</strong> Consider changing your
                  bank account to get a better interest rate deal.</p>`
    addChange();

    console.log(actualInterestEarned);
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

    let html = `<p></p>`;
    let recommendationDiv = document.getElementById('recommendations');
    // functions to add a div child to the DOM after results are generated.
    
    function addRecommendationTitle() {
        let recTitle = document.createElement('h2');
        recTitle.classList.add('rec-title');
        recTitle.innerHTML = `RECOMMENDATIONS:`;
        recommendationDiv.appendChild(recTitle);
    }
    
    function addGoodRecommendation () {
        let recommendation = document.createElement('div');
        recommendation.classList.add('good');
        recommendation.innerHTML = html;
        recommendationDiv.appendChild(recommendation);
    }

    function addOkRecommendation () {
        let recommendation = document.createElement('div');
        recommendation.classList.add('ok');
        recommendation.innerHTML = html;
        recommendationDiv.appendChild(recommendation);
    }

    function addBadRecommendation () {
        let recommendation = document.createElement('div');
        recommendation.classList.add('bad');
        recommendation.innerHTML = html;
        recommendationDiv.appendChild(recommendation);
    }

    // A check to see if rent is under 25% of the income, or over 50%.
    let rent = inputs[1];
    let pay = inputs [0];

    if (rent > (pay / 4) && rent < (pay / 2)) {
        html = `<p>Your rent/mortgage is a little high. 
            It's recommended that your accommodation payments 
            do not exceed 25% of your take-home pay.</p>`;
        addRecommendationTitle();
        addOkRecommendation();
        console.log("ok rent")
    } else if (rent > pay / 2) {
        html = `<p>Your rent/mortgage is VERY high. 
            It's recommended that your accommodation payments do not exceed 
            25% of your take-home pay. You should look for an alternative deal 
            or increase your income as soon as possible.</p>`;
        addRecommendationTitle();
        addBadRecommendation();
        console.log("bad rent")
    } else if (rent < pay / 4) {
        html = `<p>Your rent/mortgage payments are 
            healthy proportional to your income.</p>`;
        addRecommendationTitle();
        addGoodRecommendation();
        console.log("good rent")
    } else {
        alert(`Unknown value ${rent} Please fill in the form and try again.`);
        throw `Unknown value ${rent}`;
    }

    // A check to see if utilities are over 300.
    let utilities = inputs[3];
    if (utilities > 300) {
        html = `<p>Your utilities bill is a quite high. 
            The average utilities cost for UK households is 
            around £300. Consider getting a better deal, or
            find ways to cut down on your usage.</p>`;
        addOkRecommendation();
        console.log("ok utilites");
    } else if (utilities < 300) {
        html = `<p>Your utilities bill is below
            the UK average.</p>`;
        addGoodRecommendation();
        console.log("good utilities");
    } else {
        alert(`Unknown value ${utilities} Please fill in the form and try again.`);
        throw `Unknown value ${utilities}`;
    }

    // A check to see how high charitable giving is.
    let charity = inputs[4];
    if (charity > (pay / 10)) {
        html = `<p>Well done for being generous!
            Your charitable giving is well over 10% of your 
            monthly income. A giving rate of 10% is a proven
            amount for sustainable generosity.
            Consider giivng less away if you want to save more.</p>`;
        addOkRecommendation();
        console.log("ok charity");
    } else if (charity <= (pay / 10)) {
        html = `<p>Your giving is within the recommended 10% of 
            your total monthly income. It is more than acceptable to
            give more than 10%, but you won't save as much.</p>`;
        addGoodRecommendation();
        console.log("good charity");
    } else {
        alert(`Unknown value ${charity} Please fill in the form and try again.`);
        throw `Unknown value ${charity}`;
    }

    // A check to see if other expenses exceed rent/mortgage payments.
    let expense = inputs[5];
    if (expense > rent) {
        html = `<p>Your expenses currently exceed your rent/mortgage payments.
            Your biggest expense should usually be for housing.
            If you want to save money more effectively 
            you need to look for ways to cut back on your monthly costs.</p>`
        addBadRecommendation();
        console.log("bad expense")
    } else if (expense < rent) {
        html = `<p>Your expenses are currently at a healthy level proportional
        to your rent/mortgage payments.</p>`;
        addGoodRecommendation();
        console.log("good expenses");
    } else {
        alert(`Unknown value ${expense} Please fill in the form and try again.`);
        throw `Unknown value ${expense}`;
    }

    //clears the data so that the user can resubmit with new data.
    inputs = [];
}

/** 
 * A function to clear the DOM of any generated html 
 * to prevent cloned content. 
 */
function clearDom() {
    document.getElementById('results').innerHTML = "";
    document.getElementById('changes').innerHTML = "";
    document.getElementById('recommendations').innerHTML = "";
}

/**
 * A function allowing the user to print their results
 * and save their financial insights.
 */
function printPageResult () {
    window.print();
}
