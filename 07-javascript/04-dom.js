// Exercise #1:
// Copy text from input to output when the button is clicked

// Grab DOM elements
const inputField1 = document.getElementById("userInput1");
const copyBtn = document.getElementById("copy");
const display1 = document.getElementById("output");

// Add click event listener
copyBtn.addEventListener("click", () => {
  display1.innerText = inputField1.value;
});


// Exercise #2:
// Copy input dynamically as the user types

// Grab input field
const inputField2 = document.getElementById("userInput2");

// Create output container dynamically
const outputContainer = document.createElement("p");
outputContainer.className = "liveOutput";
document.getElementById("inputEventExample").appendChild(outputContainer);

// Add input event listener
inputField2.addEventListener("input", () => {
  outputContainer.innerText = inputField2.value;
});
