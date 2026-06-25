const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip-slider");
const sliderDisplay = document.querySelector("#percentage-display");
const btnReset = document.querySelector("#reset-btn");
const tipDisplay = document.querySelector("#display-tip");
const totalDisplay = document.querySelector("#display-total");
const errorDisplay = document.querySelector("#error-message");

const defaultTipValue = 15;

function calculate() {

  const bill = Number(billInput.value);

  if (billInput.value === "") {
    errorDisplay.textContent = "Please type the bill amount!";
    tipDisplay.textContent = "";
    totalDisplay.textContent = "";
    return;
  }

  if (bill <= 0) {
    errorDisplay.textContent = "Bill amount must be positive!";
    tipDisplay.textContent = "";
    totalDisplay.textContent = "";
    return;
  }
  errorDisplay.textContent = "";
  const tip = Number(tipInput.value);

  const tipAmount = bill * (tip / 100);
  const total = bill + tipAmount;

  tipDisplay.textContent = `$${(Math.ceil(tipAmount * 100) / 100).toFixed(2)}`;
  totalDisplay.textContent = `$${(Math.ceil(total * 100) / 100).toFixed(2)}`;
}

function resetState() {
  billInput.value = "";
  tipInput.value = defaultTipValue;
  sliderDisplay.textContent = defaultTipValue;
  tipDisplay.textContent = "";
  totalDisplay.textContent = "";
  errorDisplay.textContent = "";
}

tipInput.addEventListener("input", () => {
  sliderDisplay.textContent = tipInput.value;
  calculate();
})

billInput.addEventListener("input", calculate);

btnReset.addEventListener("click", resetState);




