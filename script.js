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

const history = {
    count: 0
}

function addRecordToHistory(first, second, result, operator) {
    history.count++
    const key = `operation_${history.count}`; // 'operation_' + history.count
    history[key] = {
        first, second, result, operator,
        toString() {
            return `${first} ${operator} ${second} = ${result}`
        },
        toHtmlListItem() {
            return `<li>${this.first} ${this.operator} ${this.second} = ${this.result}</li>>`
        },
        toHtmlTableRow() {
            return `<tr><td>${this.first}</td><td>${this.operator}</td><td>${this.second}</td><td>${this.result}</td></tr>>`
        }
    }
}

function sum() {
    const {firstNumber: first, secondNumber: second} = getNumbers()
    const result = first + second;
    setResult(result)
    addRecordToHistory(first, second, result, '+')
}

function sub() {
    const {firstNumber, secondNumber} = getNumbers()
    const result = firstNumber - secondNumber;
    setResult(result)
    addRecordToHistory(firstNumber, secondNumber, result, '-')
}

function div() {
    const {firstNumber, secondNumber} = getNumbers()
    if (secondNumber === 0) {
        setResult("");
        alert("на ноль делить нельзя");
    } else {
        const result = firstNumber / secondNumber;
        setResult(result)
        addRecordToHistory(firstNumber, secondNumber, result, '/')
    }
}

function mult() {
    const {firstNumber, secondNumber} = getNumbers()
    const result = firstNumber * secondNumber;
    setResult(result)
    addRecordToHistory(firstNumber, secondNumber, result, '*')
}

document.getElementById("sumButton").onclick = sum;
document.getElementById("subButton").onclick = sub;
document.getElementById("divButton").onclick = div;
document.getElementById("multButton").onclick = mult;
