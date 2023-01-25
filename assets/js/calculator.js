//Event listener to pre-populate the calculator form when the DOM loads.

document.addEventListener("DOMContentLoaded", function fillForm() {
    let fields = document.getElementsByTagName('input');
    let placeholders = [1500, 200, 50, 100, 150, 300, 1, 12, 100];

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

/**
 * A function to get all the user's inputs from the form and store them
 * in an array called inputs.
 * This function is called by form submission event.
 */
function getInputs(event) {
    event.preventDefault();
    let Inputs = [];
    let fields = document.getElementsByTagName('input');


   // for (let j = 0; j <= fields.length; j++) {
   //  Inputs.push(fields[j].value);
   // }
    

    alert(fields[0].value);

   
}

/**
 * A function to calculate the user's projected savings.
 * This function is called after the the inputs array is filled.
 */
function calcSaving() {

}

/**
 * A function to check whether the user's projected saving
 * is greater than or equal to the savings goal.
 */
function checkSaving() {

}

/**
 * A function that loops through the user's inputs and calculates
 * the revised inputs needed for the user to meet their
 * savings goal.
 * 
 * This function is only called if the checkSaving function finds
 * that the user's savings are below the goal.
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

}
