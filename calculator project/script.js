const valueDisplay = document.getElementById("value-display");
const resultDisplay = document.getElementById("result-display");
const buttons = document.querySelectorAll("button");

let expression = "";
let justEvaluated = false;
let lastAnswer = 0;

buttons.forEach(button => {
button.addEventListener("click", () => {
    const val = button.innerText;

    // Reset if new input comes after evaluation (except Ans, DEL, C)
    if (justEvaluated && !["=", "C", "DEL", "Ans"].includes(val)) {
    expression = "";
    valueDisplay.innerText = "";
    resultDisplay.innerText = "";
    justEvaluated = false;
    }

    if (val === "C") {
    // Clear everything
    expression = "";
    valueDisplay.innerText = "";
    resultDisplay.innerText = "";
    justEvaluated = false;
    } 
    else if (val === "DEL") {
    // Delete last character
    expression = expression.slice(0, -1);
    valueDisplay.innerText = expression;
    }
    else if (val === "=") {
    try {
        let exp = expression
        .replace(/√/g, "Math.sqrt")
        .replace(/\^/g, "**")
        // trig (degrees → radians)
        .replace(/sin\(/g, "Math.sin((Math.PI/180)*")
        .replace(/cos\(/g, "Math.cos((Math.PI/180)*")
        .replace(/tan\(/g, "Math.tan((Math.PI/180)*")
        // logs
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        // Ans
        .replace(/Ans/g, lastAnswer);

        let result = eval(exp);
        if (Number.isFinite(result)) {
        resultDisplay.innerText = +result.toFixed(6); // round to 6 decimals
        lastAnswer = result;
        } else {
        resultDisplay.innerText = "Error";
        lastAnswer = 0;
        }
        justEvaluated = true;
    } catch {
        resultDisplay.innerText = "Error";
        justEvaluated = true;
    }
    } 
    else if (val === "( )") {
    expression += "()";
    valueDisplay.innerText = expression;
    } 
    else if (["sin","cos","tan","log","ln"].includes(val)) {
    expression += val + "(";
    valueDisplay.innerText = expression;
    } 
    else if (val === "Ans") {
    expression += "Ans";
    valueDisplay.innerText = expression;
    } 
    else {
    expression += val;
    valueDisplay.innerText = expression;
    }
});
});