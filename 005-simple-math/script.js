const xInput = document.querySelector("#first-number");
const yInput = document.querySelector("#second-number");
const resultDisplay = document.querySelector("#results");
const errorDisplay = document.querySelector("#error");



function validateInput(input) {
    if (input.trim() === "" ) {
        errorDisplay.textContent = "Please enter a number";
        return null;
    }
    
    const number = Number(input);
    if (number < 0 || Number.isNaN(number)) {
        errorDisplay.textContent = "Please enter only positive numbers or zero.";
        return null;
    }
    return number;
}

function calculate() {
    const x = validateInput(xInput.value);
    const y = validateInput(yInput.value);
    if (x !== null && y !== null) {
        errorDisplay.textContent = ""
    }
    results = [];
    results.push(x + y);
    results.push(x - y);
    results.push(x * y);
    results.push(x / y);
    return results;
}

[xInput, yInput].forEach(input => {
    input.addEventListener("input", ()=> {
    
    const results = calculate()
    let [sum, sub, mul, div] = results;
    
    resultDisplay.textContent = `
    Sum = ${sum} 
    Subtraction = ${sub} 
    Multiplication = ${mul} 
    Division = ${div.toFixed(2)} 
    `
    })
})


