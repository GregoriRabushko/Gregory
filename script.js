function sum() {
    const firstNumber = +document.getElementById("first").value;
    const secondNumber = +document.getElementById("second").value;

    return firstNumber + secondNumber;
}

const setResult = function () {
    document.getElementById("resultField").innerText = sum().toString();
};

document.getElementById("resultButton").onclick = setResult;
