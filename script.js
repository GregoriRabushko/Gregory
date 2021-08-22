const setResult = function (result = 0) {
    document.getElementById("resultField").innerText = result.toString();
};

function getFirstNumber() {
    return +document.getElementById("first").value;
}

function getSecondNumber() {
    return +document.getElementById("second").value;
}

function sum() {
    const firstNumber = getFirstNumber();
    const secondNumber = getSecondNumber();
    const result = firstNumber + secondNumber;

    setResult(result)
}

function sub() {
    const firstNumber = getFirstNumber();
    const secondNumber = getSecondNumber();
  const result = firstNumber - secondNumber;

  setResult(result)
}

function div() {
    const firstNumber = getFirstNumber();
    const secondNumber = getSecondNumber();
    if (secondNumber === 0){
      setResult("");
      alert("на ноль делть нельзя");
    } else { 
   const result = firstNumber / secondNumber;

  setResult(result)
}
}

function mult() {
    const firstNumber = getFirstNumber();
    const secondNumber = getSecondNumber();
  const result = firstNumber * secondNumber;

  setResult(result)
}

// function getNumbers() {
//     const firstNumber = getFirstNumber();
//     const secondNumber = getSecondNumber();
//
//     return {firstNumber: firstNumber, secondNumber: secondNumber}
// }
//
// function sum() {
//     const values = getNumbers()
//     const result = values.firstNumber + values['secondNumber'];
//     setResult(result)
// }
//
// function getNumbers() {
//     const firstNumber = getFirstNumber();
//     const secondNumber = getSecondNumber();
//
//     return {firstNumber, secondNumber}
// }
//
// function sum() {
//     const {firstNumber, secondNumber} = getNumbers()
//     const result = firstNumber + secondNumber;
//     setResult(result)
// }
//
// function sub() {
//     const {firstNumber, secondNumber} = getNumbers()
//     const result = firstNumber - secondNumber;
//     setResult(result)
// }

document.getElementById("sumButton").onclick = sum;
document.getElementById("subButton").onclick = sub;
document.getElementById("divButton").onclick = div;
document.getElementById("multButton").onclick = mult;
