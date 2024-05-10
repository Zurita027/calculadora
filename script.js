let display = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.innerText === '=') {
      calculate();
    } else if (button.innerText === 'C') {
      clearDisplay();
    } else {
      display.value += button.innerText;
    }
  });
});

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
}