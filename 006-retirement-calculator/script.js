
function ageValidation(message) {
    const input = prompt(message)
    if (input === null) {
        alert("Operation cancelled!");
        return null;
    }
    if (input.trim() === "") {
        alert("You must enter something to continue!");
        return null;
    }
    const age = Number(input);
    if (Number.isNaN(age) || age < 0) {
        alert("You must enter only valid positive numbers.");
        return null;
    }
    return age;
}

const age = ageValidation("What is your current age?");
if (age !== null) {
    const retirementAge = ageValidation("At what age would you like to retire? ");
    if (retirementAge !== null) {
        const yearsLeft = retirementAge - age;
        const currentYear = new Date().getFullYear();
        if (yearsLeft <=0) {
            alert(`
            It's ${currentYear}, so you can retire now.
                `)
        } else {
            alert(`
                You have ${yearsLeft} years left until you can retire.
                It's ${currentYear}, so you can retire in ${currentYear + yearsLeft}.
                `);
        }
    }
}


