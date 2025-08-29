// ===== PART 1: JAVASCRIPT BASICS =====

/**
 * Checks if user is eligible to vote based on age input
 * Demonstrates variables, conditionals, and DOM manipulation
 */
function checkAge() {
    // Get input value and convert to number
    const age = parseInt(document.getElementById('ageInput').value);
    const resultElement = document.getElementById('ageResult');
    
    // Validate input
    if (isNaN(age)) {
        resultElement.textContent = 'Please enter a valid age!';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    // Conditional logic
    if (age < 0) {
        resultElement.textContent = 'Age cannot be negative!';
        resultElement.style.color = '#e74c3c';
    } else if (age < 18) {
        resultElement.textContent = `You are ${age} years old. Sorry, you are not eligible to vote.`;
        resultElement.style.color = '#e67e22';
    } else {
        resultElement.textContent = `You are ${age} years old. You are eligible to vote!`;
        resultElement.style.color = '#27ae60';
    }
}

/**
 * Compares two numbers and shows the relationship between them
 * Demonstrates comparison operators and conditional statements
 */
function compareNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('comparisonResult');
    
    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers in both fields!';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    // Comparison logic
    let result;
    if (num1 > num2) {
        result = `${num1} is greater than ${num2}`;
    } else if (num1 < num2) {
        result = `${num1} is less than ${num2}`;
    } else {
        result = `${num1} is equal to ${num2}`;
    }
    
    resultElement.textContent = result;
    resultElement.style.color = '#2c3e50';
}

// ===== PART 2: JAVASCRIPT FUNCTIONS =====

/**
 * Calculator function that performs different operations
 * Demonstrates function parameters and return values
 */
function calculate(operation) {
    const num1 = parseFloat(document.getElementById('calcNum1').value);
    const num2 = parseFloat(document.getElementById('calcNum2').value);
    const resultElement = document.getElementById('calculationResult');
    
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Please enter valid numbers first!';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultElement.textContent = 'Error: Cannot divide by zero!';
                resultElement.style.color = '#e74c3c';
                return;
            }
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }
    
    resultElement.textContent = `Result: ${result}`;
    resultElement.style.color = '#27ae60';
}

/**
 * Formats text based on the specified format type
 * Demonstrates string manipulation functions
 */
function formatText(formatType) {
    const text = document.getElementById('textInput').value.trim();
    const resultElement = document.getElementById('formattedText');
    
    if (!text) {
        resultElement.textContent = 'Please enter some text first!';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    let formattedText;
    switch (formatType) {
        case 'uppercase':
            formattedText = text.toUpperCase();
            break;
        case 'lowercase':
            formattedText = text.toLowerCase();
            break;
        case 'capitalize':
            formattedText = text.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ');
            break;
        default:
            formattedText = text;
    }
    
    resultElement.textContent = formattedText;
    resultElement.style.color = '#2c3e50';
}

// ===== PART 3: JAVASCRIPT LOOPS =====

/**
 * Generates multiplication table using a for loop
 * Demonstrates for loop and DOM manipulation
 */
function generateTable() {
    const number = parseInt(document.getElementById('tableNumber').value);
    const tableContainer = document.getElementById('multiplicationTable');
    
    if (isNaN(number)) {
        tableContainer.innerHTML = '<p style="color: #e74c3c;">Please enter a valid number!</p>';
        return;
    }
    
    let tableHTML = '';
    // For loop to generate table
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<div class="table-item">${number} × ${i} = ${number * i}</div>`;
    }
    
    tableContainer.innerHTML = tableHTML;
}

/**
 * Generates a sequence of numbers using a while loop
 * Demonstrates while loop and string concatenation
 */
function generateSequence() {
    const start = parseInt(document.getElementById('startNum').value);
    const end = parseInt(document.getElementById('endNum').value);
    const resultElement = document.getElementById('sequenceResult');
    
    if (isNaN(start) || isNaN(end)) {
        resultElement.textContent = 'Please enter valid start and end numbers!';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    if (start >= end) {
        resultElement.textContent = 'Start number must be less than end number!';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    let sequence = '';
    let current = start;
    // While loop to generate sequence
    while (current <= end) {
        sequence += current + (current < end ? ', ' : '');
        current++;
    }
    
    resultElement.textContent = `Sequence: ${sequence}`;
    resultElement.style.color = '#2c3e50';
}

/**
 * Processes array input based on the specified operation
 * Demonstrates array methods and forEach loop
 */
function processArray(operation) {
    const input = document.getElementById('arrayInput').value;
    const resultElement = document.getElementById('arrayResult');
    
    if (!input.trim()) {
        resultElement.textContent = 'Please enter numbers separated by commas!';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    // Convert input string to array of numbers
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length === 0) {
        resultElement.textContent = 'No valid numbers found!';
        resultElement.style.color = '#e74c3c';
        return;
    }
    
    let result;
    switch (operation) {
        case 'sum':
            result = numbers.reduce((total, num) => total + num, 0);
            resultElement.textContent = `Sum: ${result}`;
            break;
        case 'average':
            result = numbers.reduce((total, num) => total + num, 0) / numbers.length;
            resultElement.textContent = `Average: ${result.toFixed(2)}`;
            break;
        case 'max':
            result = Math.max(...numbers);
            resultElement.textContent = `Maximum: ${result}`;
            break;
        case 'min':
            result = Math.min(...numbers);
            resultElement.textContent = `Minimum: ${result}`;
            break;
    }
    
    resultElement.style.color = '#27ae60';
}

// ===== PART 4: DOM MANIPULATION =====

/**
 * Changes the theme of the page
 * Demonstrates DOM class manipulation and event handling
 */
function changeTheme(theme) {
    document.body.className = ''; // Remove all classes
    if (theme !== 'light') {
        document.body.classList.add(`${theme}-theme`);
    }
    
    // Show current theme in console
    console.log(`Theme changed to: ${theme}`);
}

/**
 * Adds items to the dynamic list
 * Demonstrates creating and appending DOM elements
 */
function addListItem() {
    const input = document.getElementById('listItemInput');
    const text = input.value.trim();
    
    if (!text) {
        alert('Please enter some text for the list item!');
        return;
    }
    
    const list = document.getElementById('dynamicList');
    const listItem = document.createElement('li');
    
    // Create text node
    const textNode = document.createTextNode(text);
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        list.removeChild(listItem);
    };
    
    // Append elements
    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    
    // Clear input
    input.value = '';
}

/**
 * Clears all items from the dynamic list
 * Demonstrates DOM element removal
 */
function clearList() {
    const list = document.getElementById('dynamicList');
    list.innerHTML = '';
}

/**
 * Updates the counter value
 * Demonstrates DOM text content manipulation
 */
let counter = 0;
function updateCounter(value) {
    counter += value;
    document.getElementById('counterValue').textContent = counter;
    
    // Change color based on value
    const counterElement = document.getElementById('counterValue');
    if (counter > 0) {
        counterElement.style.color = '#27ae60';
    } else if (counter < 0) {
        counterElement.style.color = '#e74c3c';
    } else {
        counterElement.style.color = '#2c3e50';
    }
}

/**
 * Resets the counter to zero
 */
function resetCounter() {
    counter = 0;
    document.getElementById('counterValue').textContent = '0';
    document.getElementById('counterValue').style.color = '#2c3e50';
}

/**
 * Creates and appends new DOM elements
 * Demonstrates dynamic element creation
 */
function createElement() {
    const type = document.getElementById('elementType').value;
    const content = document.getElementById('elementContent').value.trim();
    const container = document.getElementById('elementContainer');
    
    if (!content) {
        alert('Please enter content for the element!');
        return;
    }
    
    const element = document.createElement(type);
    element.textContent = content;
    element.style.margin = '0.5rem 0';
    element.style.padding = '0.5rem';
    element.style.backgroundColor = '#ecf0f1';
    element.style.borderRadius = '4px';
    
    container.appendChild(element);
    
    // Clear input
    document.getElementById('elementContent').value = '';
}

// ===== ADDITIONAL UTILITY FUNCTIONS =====

/**
 * Initializes the application
 * Demonstrates event listeners and initialization
 */
function init() {
    console.log('JavaScript Fundamentals Application Initialized');
    
    // Add input event listeners for better UX
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                // Find the nearest button and click it
                const button = this.nextElementSibling;
                if (button && button.tagName === 'BUTTON') {
                    button.click();
                }
            }
        });
    });
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', init);