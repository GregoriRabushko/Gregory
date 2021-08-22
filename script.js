const setResult = function (result = 0) {
    document.getElementById("resultField").innerText = result.toFixed(4);
};

function getFirstNumber() {
    return +document.getElementById("first").value;
}

function getSecondNumber() {
    return +document.getElementById("second").value;
}

//
// function getNumbers() {
//     const firstNumber = getFirstNumber();
//     const secondNumber = getSecondNumber();
//
//     return {
//         firstNumber: firstNumber,
//         secondNumber: secondNumber
//     }
// }
//
// function sum() {
//     const values = getNumbers()
//     const fieldName = 'secondNumber'
//     const result = values.firstNumber + values[fieldName];
//     setResult(result)
// }

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

// let a = {}
// console.log('a=',a)
// let b = { x: 4 }
// console.log('b=',b)
// a = {...b}
// console.log('a=',a)
// b.x = 7
// console.log('a=',a)

// const a = {}
// const b = {}
//
// console.log(a === b)

// const vasia = {
//     name: 'Vasia',
//     age: 23
// }
//
// const petia = {
//     name: 'Vasia',
//     age: 42
// }
//
// function comparePeople(p1, p2) {
//     return p1.name === p2.name
// }
//
// console.log(comparePeople(vasia, petia))

const vasia = {
    name: 'Vasia',
    age: 23,

    toString() {
        return `${this.name} ${this.age}`
    },

    cry() {
        return 'I\'m fill bed'
    }
}

console.log(vasia.toString())
console.log(vasia.cry())