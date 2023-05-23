const buttons = [
  { text: "AC", className: "btn-clear" },
  { text: "√", className: "btn-operation" },
  { text: "x²", className: "btn-operation" },
  { text: "%", className: "btn-operation" },
  { text: "7", className: "btn-number" },
  { text: "8", className: "btn-number" },
  { text: "9", className: "btn-number" },
  { text: "/", className: "btn-operation" },
  { text: "4", className: "btn-number" },
  { text: "5", className: "btn-number" },
  { text: "6", className: "btn-number" },
  { text: "*", className: "btn-operation" },
  { text: "1", className: "btn-number" },
  { text: "2", className: "btn-number" },
  { text: "3", className: "btn-number" },
  { text: "-", className: "btn-operation" },
  { text: "0", className: "btn-number" },
  { text: ".", className: "btn-number" },
  { text: "=", className: "btn-equals" },
  { text: "+", className: "btn-operation" },
];

const buttonsContainer = document.querySelector(".buttons-container");
const display = document.querySelector(".display");

let inputArray = "";

buttons.forEach(({ text, className }) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  buttonEl.className = className;
  buttonEl.addEventListener("click", handleButtonClick);
  buttonsContainer.appendChild(buttonEl);
});

function handleButtonClick(event) {
  event.preventDefault();
  const pressedButton = event.target.innerText;

  if (pressedButton === "AC") {
    handleACButton();
  } else if (pressedButton === "=") {
    handleEqualsButton();
  } else if (pressedButton === "x²") {
    handleSquareButton();
  } else if (pressedButton === "√") {
    handleRootButton();
  } else if (pressedButton === "%") {
    handlePercentageButton();
  } else {
    handleNumberButton(pressedButton);
  }
}

function handleACButton() {
  inputArray = "";
  display.textContent = "0";
  console.log(`Pressed button: AC. Input array is: ${inputArray}`);
}

function handleEqualsButton() {
  if (inputArray === "") return;
  inputArray = evaluateExpression(inputArray);
  display.textContent = inputArray;
  console.log(`Pressed button: =. Input array is: ${inputArray}`);
}

function handleSquareButton() {
  inputArray += "**2";
  handleEqualsButton();
  console.log(`Pressed button: x². Input array is: ${inputArray}`);
}

function handleRootButton() {
  inputArray += "**(1/2)";
  handleEqualsButton();
  console.log(`Pressed button: √. Input array is: ${inputArray}`);
}

function handlePercentageButton() {
  inputArray += "/100*";
  display.textContent = inputArray.replace("/100*", "%");
  console.log(`Pressed button: %. Input array is: ${inputArray}`);
}

function handleNumberButton(pressedButton) {
  inputArray += pressedButton;
  console.log(
    `Pressed button: ${pressedButton}. Input array is: ${inputArray}`
  );
  display.textContent = inputArray.replace("/100*", "%");
}

function evaluateExpression(str) {
  return Function(`'use strict'; return (${str})`)();
}
