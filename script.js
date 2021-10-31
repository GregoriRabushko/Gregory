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

// const a = {
//     x: {
//         y: 2, // 5
//         z: '3'
//     }
// }
//
// const c = {...a};
//
// c.x.y = 5

const arr = [];

arr.push({
    amount: 5,
    key: '1', toString() {
        return this.key;
    }
});
arr.push({
    amount: 5,
    key: '22', toString() {
        return this.key;
    }
}, {
    amount: 5,
    key: '3', toString() {
        return this.key;
    }
});
arr.unshift({
    amount: 5,
    key: '11', toString() {
        return this.key;
    }
});
// console.log(arr.join(', ').split(', '));

// console.log(arr.slice(1, 3)); // don't mutate
// console.log(arr.splice(1, 3)); // mutate

// console.log(arr.find(el => el.key.includes('1'))); // don't mutate
// console.log(arr.filter(el => el.key.includes('1'))); // don't mutate

// arr.fill('sorry');

// function f(el, index, arr) {
//     console.log('El: ', el , 'ndx: ', index);
//     console.dir(arr);
// }

// arr.forEach(f);

// function f2(el, index, arr) {
//     // el.key = '0';
//     return `${el.key} ${index} ${arr.length}`;
// }

// console.log(arr
//     .map(f2)
//     .filter(el => el.includes('1')));

const INITIAL_AMOUNT = 0;
const calculateTotalAmount = (acc, el, ind, arr) => {
    acc += el.amount;
    return acc;
}

console.log(arr.reduce(calculateTotalAmount, INITIAL_AMOUNT));

// arr.sort((a, b) => {
//     return b.key - a.key;
// });

// arr.reverse();

console.dir(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// do {
//     console.log(arr[i]);
//     i++;
// } while (i < arr.length)
