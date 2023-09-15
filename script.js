/** Implement a click function to which writes digits on calculator screen */

/** Implement a function which clears digits from calculator screen upon clicking AC button */

/** Implement a function which enters digit to screen upon pressing any number button and decimal point */

/** Implement a function for adding/subtracting/multiplying/dividing first entered number */

/** */

const screen = document.getElementById('screentext');
const numberButtons = document.querySelectorAll('.numberBtn');
const clearButton = document.querySelector('.clearbtn');
const operationButtons = document.querySelectorAll('.operationbtn');
let firstNumber = null;
let selectedOperation = null;
/*function performOperation() {
  const secondNumber = parseFloat(screen.textContent);
  let result = null;

  if (selectedOperation === "+") {
    result = firstNumber + secondNumber;
  } else if (selectedOperation === "-") {
    result = firstNumber - secondNumber;
  } else if (selectedOperation === "x") {
    result = firstNumber * secondNumber;
  } else if (selectedOperation === "/") {
    result = firstNumber / secondNumber;
  }
  screen.textContent = result;
  firstNumber = result;
  selectedOperation = null;
}

function performOperation() {
  const secondNumber = parseFloat(screen.textContent);
  console.log('firstNumber:', firstNumber);
  console.log('selectedOperation:', selectedOperation);
  console.log('secondNumber:', secondNumber);

  let result = null;

  if (selectedOperation === '+') {
    result = firstNumber + secondNumber;
  } else if (selectedOperation === '-') {
    result = firstNumber - secondNumber;
  } else if (selectedOperation === 'x') {
    result = firstNumber * secondNumber;
  } else if (selectedOperation === '/') {
    if (secondNumber === 0) {
      console.error('Division by zero');
      return;
    } else {
      result = firstNumber / secondNumber;
    }
  }
  screen.textContent = result;
  firstNumber = result; // Store the result for future calculations
  selectedOperation = null; // Reset the selected operation
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const digit = button.textContent;
    screen.textContent += digit;
  });
});
clearButton.addEventListener('click', () => {
  screen.textContent = '';
});
operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (selectedOperation === null) {
      firstNumber = parseFloat(screen.textContent);
      selectedOperation = button.textContent;
      screen.textContent = '';
    } else {
      performOperation();
      selectedOperation = button.textContent;
    }
  });
});
const equalButton = document.getElementById('equal');
equalButton.addEventListener('click', () => {
  if (selectedOperation !== null) {
    performOperation();
    selectedOperation = null;
  }
});

*/

document.addEventListener('DOMContentLoaded', () => {
  const screen = document.getElementById('screentext');
  const numberButtons = document.querySelectorAll('.numberBtn');
  const clearButton = document.querySelector('.clearbtn');
  const operationButtons = document.querySelectorAll('.operationbtn');
  let firstNumber = null;
  let selectedOperation = null;

  // Attach event listeners for number buttons
  numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const digit = button.textContent;
      screen.textContent += digit;
    });
  });

  // Attach event listener for clear button
  clearButton.addEventListener('click', () => {
    screen.textContent = '';
  });

  // Attach event listeners for operation buttons
  operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (selectedOperation === null) {
        firstNumber = parseFloat(screen.textContent);
        selectedOperation = button.textContent;
        screen.textContent = '';
      } else {
        performOperation();
        selectedOperation = button.textContent;
      }
    });
  });

  // Attach event listener for equal button
  const equalButton = document.getElementById('equal');
  equalButton.addEventListener('click', () => {
    if (selectedOperation !== null) {
      performOperation();
      selectedOperation = null;
    }
  });

  function performOperation() {
    const secondNumber = parseFloat(screen.textContent);
    let result = null;

    if (selectedOperation === '+') {
      result = firstNumber + secondNumber;
    } else if (selectedOperation === '-') {
      result = firstNumber - secondNumber;
    } else if (selectedOperation === 'x') {
      result = firstNumber * secondNumber;
    } else if (selectedOperation === '/') {
      result = firstNumber / secondNumber;
    }
    screen.textContent = result;
    firstNumber = result;
    selectedOperation = null;
  }

  function performOperation() {
    const secondNumber = parseFloat(screen.textContent);
    console.log('firstNumber:', firstNumber);
    console.log('selectedOperation:', selectedOperation);
    console.log('secondNumber:', secondNumber);

    let result = null;

    if (selectedOperation === '+') {
      result = firstNumber + secondNumber;
    } else if (selectedOperation === '-') {
      result = firstNumber - secondNumber;
    } else if (selectedOperation === 'x') {
      result = firstNumber * secondNumber;
    } else if (selectedOperation === '/') {
      if (secondNumber === 0) {
        console.error('Division by zero');
        return;
      } else {
        result = firstNumber / secondNumber;
      }
    }
    screen.textContent = result;
    firstNumber = result; // Store the result for future calculations
    selectedOperation = null; // Reset the selected operation
  }
});

// previous and next button
const enteredNumbers = [];
let currentIndex = 0;
const prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateScreen();
  }
});
const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', () => {
  if (currentIndex < enteredNumbers.length - 1) {
    currentIndex++;
    updateScreen();
  }
});

//light mode
const darkModeCheckbox = document.getElementById('darkMode');
function toggleDarkMode() {
  const calculator = document.querySelector('.calculator');
  calculator.classList.toggle('dark-mode');
}
darkModeCheckbox.addEventListener('change', () => {
  toggleDarkMode();
});
