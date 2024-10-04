function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
function handleBackspace() {
  display.value = display.value.slice(0, -1);
  currentInput = display.value;
  updateDisplay();
}

function handlePercentage() {
  if (display.value !== 0) {
    display.value = parseFloat(eval(display.value)) / 100;
  }
}


