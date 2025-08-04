// script.js
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const clearBtn = document.getElementById('clear');
const countDisplay = document.getElementById('count-display');
const errorMessage = document.getElementById('error-message');

let count = 0;

function updateDisplay() {
  countDisplay.textContent = count;
  errorMessage.textContent = '';
  clearBtn.style.display = count === 0 ? 'none' : 'inline-block';
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  if (count === 0) {
    errorMessage.textContent = 'Error: Count is already 0!';
  } else {
    count--;
    updateDisplay();
  }
});

clearBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Initial visibility logic
updateDisplay();
