const setResult = function (result = 0) {
    document.getElementById("resultField").innerText = result.toFixed(4);
};

function getFirstNumber() {
    return +document.getElementById("first").value;
}

function getSecondNumber() {
    return +document.getElementById("second").value;
}

function getNumbers() {
    const firstNumber = getFirstNumber();
    const secondNumber = getSecondNumber();

    return {firstNumber, secondNumber}
}

function sum() {
    const {firstNumber: first, secondNumber: second} = getNumbers()
    const result = first + second;
    setResult(result)
}

function sub() {
    const {firstNumber, secondNumber} = getNumbers()
    const result = firstNumber - secondNumber;
    setResult(result)
}

function div() {
    const {firstNumber, secondNumber} = getNumbers()
    if (secondNumber === 0) {
        setResult("");
        alert("на ноль делить нельзя");
    } else {
        const result = firstNumber / secondNumber;

        setResult(result)
    }
}

function mult() {
    const {firstNumber, secondNumber} = getNumbers()
    const result = firstNumber * secondNumber;

    setResult(result)
}

document.getElementById("sumButton").onclick = sum;
document.getElementById("subButton").onclick = sub;
document.getElementById("divButton").onclick = div;
document.getElementById("multButton").onclick = mult;
