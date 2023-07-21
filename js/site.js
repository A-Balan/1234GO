// Get the numbers from our form inputs
// Entry POINT in our code (it comes 1st-like a front door)
// aka the CONTROLLER FUNCTION
function getValues() {
    let startNumber = document.getElementById("startValue").value;
    let endNumber = document.getElementById("endValue").value;

    startNumber = Number(startNumber);
    endNumber = Number(endNumber);

    if (isNaN(startNumber) == true || isNaN(endNumber) == true) {
        // make sure inputs are numbers
        Swal.fire({
            title: "Oops!",
            text: "Type in a number, not text",
            icon: "error",
            backdrop: false
        })

    } else if (startNumber > endNumber) {
        // display an error message if first num is too big
        Swal.fire({
            title: "Oops!",
            text: "The starting number must be less than the ending number",
            icon: "error"
        })
    } else {
        // display numbers if all is ok
        let numberArray = generateNumbers(startNumber, endNumber);

        displayNumbers(numberArray);
    }
}

// Business Logic - creates every number in the input range
// aka MODEL of our data DATA MODEL
function generateNumbers(start, end) {

    let range = [];

    for (let number = start; number <= end; number++) {

        range.push(number)
    }
    return range;
}

// put the numbers on the page
// aka VIEW FUNCTION - it's responsible for what you view in the pg
function displayNumbers(numbersToDisplay) {

    let tableHtml = "";

    for (let index = 0; index < numbersToDisplay.length; index++) {

        let currentNumber = numbersToDisplay[index];

        let className = "";

        if (currentNumber % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }

        let tableRowHtml = `<tr><td class="${className}">${currentNumber}</td></tr>`;

        tableHtml = tableHtml + tableRowHtml;
        // tableHtml += tableRowHtml;
    }

    document.getElementById("results").innerHTML = tableHtml;
}