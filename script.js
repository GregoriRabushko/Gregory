const setResult = function (result = 0) {
    if (result==="") {
        document.getElementById("resultField").innerText = result;
        return;
    }
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

function historyCol(first, second, result, operator) {
    history.count++
    const key = `operation_${history.count}`;
    history[key] = {
        first, second, result, operator,
        toString() {
            return `${first} ${operator} ${second} = ${result}`
        }
    }
}

const logHistory = function () {
    console.log('=====BEGIN HISTORI=====');
    for (const key in history) {
        if (key === 'count') {
            continue;
        }
        console.log(`${key}: `, history[key]) 
    }
    console.log('=====END HISTORI=====');
}

function sum() {
    const {firstNumber: first, secondNumber: second} = getNumbers()
    const result = first + second;
    setResult(result);
    historyCol(first,  second, result, '+');
    logHistory();
    }


function sub() {
    const {firstNumber: first, secondNumber: second} = getNumbers()
    const result = first - second;

    setResult(result)
    historyCol(first, '-', second, result);
    logHistory ();
        }

function div() {
    const {firstNumber: first, secondNumber: second} = getNumbers()
    if (second === 0) {
        setResult("");
        alert("на ноль делить нельзя");
    } else {
        const result = first / second;

        setResult(result)
        historyCol(first, '/', second, result);
        logHistory ();
            }
        }

function mult() {
    const {firstNumber: first, secondNumber: second} = getNumbers()
    const result = first * second;
    
    setResult(result)
    historyCol(first, "*", second, result);
    logHistory ();
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


// const vasia = {
//     name: 'Vasia',
//     age: 23,

//     toString() {
//         return `${this.name} ${this.age}`
//     },

//     cry() {
//         return 'I\'m fill bed'
//     }
// }

// console.log(vasia.toString())
// console.log(vasia.cry())

// const a = {}
// const key = 'calc_1'
// a[key] = '2 + 3 = 5'
// console.log(a)