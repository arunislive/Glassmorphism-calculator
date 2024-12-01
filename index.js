// Selecting the display element
let display = document.getElementById("display");

// Append values to the display
function appendToDisplay(value) {
  display.value += value; // Append value directly to the input field
}

// Calculate the result of the expression
function calculate() {
  try {
    // Replace "*10^" with "e" for scientific notation
    let expression = display.value.replace("*10^", "e");
    // Evaluate the expression safely
    display.value = eval(expression); // Replace eval with safer evaluation for production apps
  } catch (error) {
    display.value = "Error"; // Show error on invalid input
  }
}

// Clear the entire display
function clearDisplay() {
  display.value = ""; // Reset the display to an empty string
}

// Delete the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1); // Remove the last character
}

// Handle keyboard inputs
document.addEventListener("keydown", function (event) {
  const key = event.key; // Get the key pressed
  const allowedKeys = [
    ".",
    "/",
    "*",
    "-",
    "+",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Enter",
    "Backspace",
  ];

  if (allowedKeys.includes(key)) {
    event.preventDefault(); // Prevent default behavior for allowed keys

    if (key === "Enter") {
      calculate(); // Trigger calculation on Enter
    } else if (key === "Backspace") {
      deleteLast(); // Delete the last character
    } else {
      appendToDisplay(key); // Append the key to the display
    }
  }
});
