const meterButton = document.querySelector("#meters-radio");
const feetButton = document.querySelector("#feet-radio");

const lengthInput = document.querySelector("#length-input");
const widthInput = document.querySelector("#width-input");

const errorDisplay = document.querySelector("#error-message");
const resultFeetDisplay = document.querySelector("#result-feet");
const resultMetersDisplay = document.querySelector("#result-meters");

const feetToMeterFactor = 0.09290304;
const meterToFeetFactor = 10.7639;

function validateInput(input) {
    if (input === "") {
        errorDisplay.textContent = "Enter a numeric value to continue.";
        resultFeetDisplay.textContent = "";
        resultMetersDisplay.textContent = "";
        return null;
    };
    
    if (input <= 0) {
        errorDisplay.textContent = "Please enter a number greater than 0";
        resultFeetDisplay.textContent = "";
        resultMetersDisplay.textContent = "";
        return null;
    };

    if (meterButton.checked === false && feetButton.checked === false) {
        errorDisplay.textContent = "Please choose between ft or meter";
        resultFeetDisplay.textContent = "";
        resultMetersDisplay.textContent = "";
        return null;
    }
    errorDisplay.textContent = "";
    return input;
};

function calculate(area) {   
    if (meterButton.checked) {
        const areaFeet = area * meterToFeetFactor;
        const areaMeters = area;
        
        return [areaFeet, areaMeters];

    } else if (feetButton.checked){
        const areaMeters = area * feetToMeterFactor;
        const areaFeet = area;
        
        return [areaFeet, areaMeters];
    };
};

[lengthInput, widthInput, meterButton, feetButton].forEach(input => {
    input.addEventListener("input", ()=> {
        const length = validateInput(lengthInput.value);
        const width = validateInput(widthInput.value);

        if (length !== null && width !== null) {
            const area = length * width;
            let [feet, meters] = calculate(area);
            resultFeetDisplay.textContent = `feet: ${feet.toFixed(2)}`;
            resultMetersDisplay.textContent = `meters: ${meters.toFixed(2)}`;
        } 

    });

});