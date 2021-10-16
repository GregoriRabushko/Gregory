const setResult = function (result = 0) {
    if (result === "") {
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

//        addRecordToHistory(10,     15,     25,     '+')
function addRecordToHistory(first, second, result, operator) {
    history.count++
    const key = `operation_${history.count}`; // 'operation_' + history.count
    history[key] = {
        first, second, result, operator,
        toString() {
            return `${first} ${operator} ${second} = ${result}` // 10 + 15 = 25
        },
        toHtmlListItem() {
            return `<li>${first} ${operator} ${second} = ${result}</li>>`
        },
        toHtmlTableRow() {
            return `<tr><td>${first}</td><td>${operator}</td><td>${second}</td><td>${result}</td></tr>>`
        }
    }

    /*
    history = {
      count: 3,
      operation_1: {
        first: 10,
        second: 15,
        result: 25,
        operator: '+'
      },
      operation_2: {
        first: 10,
        second: 15,
        result: 25,
        operator: '+'
      },
      operation_3: {
        first: 10,
        second: 15,
        result: 25,
        operator: '+'
      },
    }
     */
}


const logHistory = function () {
    console.log('=====BEGIN HISTORY=====');
    for (const key in history) {
        if (key === 'count') {
            continue;
        }
        console.log(`${key}: `, history[key])
    } // ключи
    console.log('=====END HISTORY=====');
}

// const c = [1, 2, 3, 4, 5];
// for (let i = 0; i < c.length; i++) {
//     console.log(c[i])
// }

function sum() {
    const {firstNumber: first, secondNumber: second} = getNumbers()
    const result = first + second;
    setResult(result);
    addRecordToHistory(first, second, result, '+');
    logHistory();
}

function sub() {
    const {firstNumber, secondNumber} = getNumbers()
    const result = firstNumber - secondNumber;
    setResult(result);
    addRecordToHistory(firstNumber, secondNumber, result, '-');
    logHistory();
}

function div() {
    const {firstNumber, secondNumber} = getNumbers()
    if (secondNumber === 0) {
        setResult("");
        alert("на ноль делить нельзя");
    } else {
        const result = firstNumber / secondNumber;
        setResult(result);
        addRecordToHistory(firstNumber, secondNumber, result, '/');
        logHistory();
    }
}

function mult() {
    const {firstNumber, secondNumber} = getNumbers()
    const result = firstNumber * secondNumber;
    setResult(result);
    addRecordToHistory(firstNumber, secondNumber, result, '*');
    logHistory();
}

document.getElementById("sumButton").onclick = sum;
document.getElementById("subButton").onclick = sub;
document.getElementById("divButton").onclick = div;
document.getElementById("multButton").onclick = mult;


const a = {
    x: {
        y: 2, // 5
        z: '3'
    }
}

const c = {...a};

c.x.y = 5
