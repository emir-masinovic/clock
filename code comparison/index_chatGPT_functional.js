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

const handleButtonClick = (event) => {
  event.preventDefault();
  const pressedButton = event.target.innerText;

  const buttonActions = {
    AC: () => {
      inputArray = "";
      display.textContent = "0";
    },
    "=": () => {
      if (inputArray === "") return;
      inputArray = evaluateExpression(inputArray);
      display.textContent = inputArray;
    },
    "x²": () => {
      inputArray += "**2";
      inputArray = evaluateExpression(inputArray);
      display.textContent = inputArray;
    },
    "√": () => {
      inputArray += "**(1/2)";
      inputArray = evaluateExpression(inputArray);
      display.textContent = inputArray;
    },
    "%": () => {
      display.textContent = inputArray + "%";
      inputArray += "/100*";
    },
    default: () => {
      inputArray += pressedButton;
      display.textContent = inputArray.replace("/100*", "%");
    },
  };

  const action = buttonActions[pressedButton] || buttonActions.default;
  action();

  console.log(
    `Pressed button: ${pressedButton}. Input array is: ${inputArray}`
  );
};

buttons.forEach(({ text, className }) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  buttonEl.className = className;
  buttonEl.addEventListener("click", handleButtonClick);
  buttonsContainer.appendChild(buttonEl);
});

function evaluateExpression(str) {
  return Function(`'use strict'; return (${str})`)();
}
