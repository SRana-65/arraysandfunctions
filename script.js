
// Function 1: Find Maximum Number

function findMaximum(numbers) {
    return Math.max(...numbers);
}


// Function 2: Calculate Sum of All Elements

const calculateSum = (numbers) => {
    return numbers.reduce((total, current) => total + current, 0);
};


// Function 3: Count Odd Numbers

const countOddNumbers = function(numbers) {
    return numbers.filter(number => number % 2 !== 0).length;
};


// Get HTML Elements

const numbersInput = document.getElementById("numbersInput");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");


// Button Click Event

calculateBtn.addEventListener("click", function() {

    // Get User Input

    const inputValue = numbersInput.value.trim();

    // Check Empty Input

    if (inputValue === "") {
        result.innerHTML = '<p class="error">Please enter some numbers.</p>';
        console.log("Please enter some numbers.");
        return;
    }

    // Convert Input into Array

    const inputParts = inputValue.split(",");

    if (inputParts.some(part => part.trim() === "")) {
        result.innerHTML = '<p class="error">Please enter valid numbers separated by commas.</p>';
        console.log("Invalid input.");
        return;
    }

    const numbers = inputParts.map(Number);

    // Validate Numbers

    if (numbers.some(number => !Number.isSafeInteger(number))) {
        result.innerHTML = '<p class="error">Please enter valid whole numbers only.</p>';
        console.log("Invalid input. Please enter whole numbers.");
        return;
    }

    // Call Functions

    const maximum = findMaximum(numbers);
    const sum = calculateSum(numbers);
    const oddCount = countOddNumbers(numbers);

    // Display Results in Browser

    result.innerHTML = `
        <p><strong>Entered Array:</strong> [${numbers.join(", ")}]</p>
        <p><strong>Maximum Number:</strong> ${maximum}</p>
        <p><strong>Sum of All Elements:</strong> ${sum}</p>
        <p><strong>Count of Odd Numbers:</strong> ${oddCount}</p>
    `;

    // Display Results in Console

    console.log("Entered Array:", numbers);
    console.log("Maximum Number:", maximum);
    console.log("Sum of All Elements:", sum);
    console.log("Count of Odd Numbers:", oddCount);

});
