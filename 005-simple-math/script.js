const xInput = document.querySelector("#first-number");
const yInput = document.querySelector("#second-number");
sumDisplay = document.querySelector("#sum");
subDisplay = document.querySelector("#sub");
mulDisplay = document.querySelector("#mul");
divDisplay = document.querySelector("#div");
sumOperationDisplay = document.querySelector("#sum-operation");
subOperationDisplay = document.querySelector("#sub-operation");
mulOperationDisplay = document.querySelector("#mul-operation");
divOperationDisplay = document.querySelector("#div-operation");
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
        const results = [];
        results.push(x + y, x - y, x * y, x / y );
        return results;
    }
    return null;
}

[xInput, yInput].forEach(input => {
    input.addEventListener("input", ()=> {
    
    const results = calculate()
    
    if (results !== null) {
        let [sum, sub, mul, div] = results;
        
        sumDisplay.textContent = `${sum}`;
        subDisplay.textContent = `${sub}`;
        mulDisplay.textContent = `${mul}`;
        if (div !== Infinity) {
            divDisplay.textContent = `${div.toFixed(2)}`;
        }else {
            divDisplay.textContent = "Can't divide by zero";
        } 
        sumOperationDisplay.innerHTML = `${xInput.value} + ${yInput.value}`
        subOperationDisplay.innerHTML = `${xInput.value} - ${yInput.value}`
        mulOperationDisplay.innerHTML = `${xInput.value} x ${yInput.value}`
        divOperationDisplay.innerHTML = `${xInput.value} / ${yInput.value}`

    } 
    
    })
})

        // OperationDisplay.innerHTML = `
        // <p>${xInput.value} + ${yInput.value}</p>
        // <p>${xInput.value} - ${yInput.value}</p>
        // <p>${xInput.value} x ${yInput.value}</p>
        // <p>${xInput.value} / ${yInput.value}</p>
        // `

    //     else {
    //     sumDisplay.textContent = "";
    //     subDisplay.textContent = "";
    //     mulDisplay.textContent = "";
    //     divDisplay.textContent = "";
    // }