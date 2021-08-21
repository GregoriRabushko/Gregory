const setResult = function (result = 0) {
    document.getElementById("resultField").innerText = result.toString();
};

function sum() {
    const firstNumber = +document.getElementById("first").value;
    const secondNumber = +document.getElementById("second").value;

    // const func = () => {
    //     console.log(firstNumber)
    // }
    //
    // func();

    const result = firstNumber + secondNumber;

    setResult(result)
}

function sub() {
    const firstNumber = +document.getElementById("first").value;
    const secondNumber = +document.getElementById("second").value;

    const result = firstNumber - secondNumber;

    setResult(result)
}

document.getElementById("sumButton").onclick = sum;
document.getElementById("subButton").onclick = sub;
