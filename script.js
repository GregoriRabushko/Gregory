// import * as foo from "./index";
// import fun from "./index";

import {calculateExpressionFromString} from "./index.js";
import variable, {CONSTANTA} from './second.js';

console.log('From previous file: ', calculateExpressionFromString('5+2'));
console.log('From second: ', variable);

console.dir('CONSTANTA - BUG: ', CONSTANTA)

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

// console.log(arr.reduce(calculateTotalAmount, INITIAL_AMOUNT));

// arr.sort((a, b) => {
//     return b.key - a.key;
// });

// arr.reverse();

// console.dir(arr);

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

// const names = ['apple', 'lemon', 'grape', 'potatoes']
// const prices = [108, 220, 58, 55];
//
// // const unSortedPrices = [...prices];
// // prices.sort((a, b) => a - b);
// // const index = unSortedPrices.indexOf(prices[0]);
// // console.log(names[index]);
//
// function searchIndexOfLowestPrice(arr) {
//     let index = -1;
//     let lowestPrice;
//     arr.forEach(
//         (price, currentIndex) => {
//             if (currentIndex === 0 || price < lowestPrice) {
//                 index = currentIndex;
//                 lowestPrice = price;
//             }
//         }
//     )
//
//     return index;
// }
//
// console.log(names[searchIndexOfLowestPrice(prices)]);

const sortProductsByPresenting = (product1, product2) => {
    if (product1.isPresent === true && product2.isPresent === false) return -1;
    if (product1.isPresent === false && product2.isPresent === true) return 1;
    if (product1.isPresent === product2.isPresent) return 0;
    // return product1 - product2;
}

const products = [
    {name: 'apple', price: 105, isPresent: true},
    {name: 'lemon', price: 250, isPresent: false},
    {name: 'bananas', price: 58, isPresent: true},
    {name: 'potatoes', price: 55, isPresent: true},
].sort((p1, p2) => p1.price - p2.price);

function findProductWithMinimalPrice(checkedProducts) {
    let foundedProduct;
    checkedProducts.forEach(currentProduct => {
        if (foundedProduct === undefined
            || foundedProduct.price > currentProduct.price) {
            foundedProduct = {...currentProduct};
        }
    });

    return foundedProduct;
}

const product = findProductWithMinimalPrice(products);

// let tableHtml = '<table>'
//
// // create header (tableHtml += '....')
//
// tableHtml += '<tbody>'
// products.forEach(
//     product => {
//         tableHtml +=
//             `<tr>
//                 <td>${product.name}</td>
//                 <td>${product.price}</td>
//                 <td>${product.isPresent ? 'present' : 'not present'}</td>
//             </tr>`;
//     }
// );
// tableHtml += '</tbody>'
//
// tableHtml += '</table>'

const headers = [
    'name',
    'price',
    'is present',
]
const tableContainer = document.getElementById('tableContainer');

const table = document.createElement('table');
// tableContainer.appendChild(table);

const headerRow = table.createTHead().insertRow();
headers.forEach(
    title => {
        headerRow.insertCell().innerText = title;
    }
);

const tableBody = table.createTBody();
products.forEach(
    product => {
        const bodyRow = tableBody.insertRow();

        bodyRow.insertCell().innerText = product.name;
        bodyRow.insertCell().innerText = `${product.price}`;
        bodyRow.insertCell().innerText = product.isPresent ? 'present' : 'not present';
    }
);

// const header = document.createElement('thead');
// const headerRow = document.createElement('tr');
// headers.forEach(
//     title => {
//         const headerTitleElement = document.createElement('th');
//         headerTitleElement.innerText = title;
//         headerRow.appendChild(headerTitleElement);
//     }
// )
// header.appendChild(headerRow);
//
// const tableBody = document.createElement('tbody');
// products.forEach(
//     product => {
//         const bodyRow = document.createElement('tr');
//
//         const bodyNameElement = document.createElement('td');
//         bodyNameElement.innerText = product.name;
//
//         const bodyPriceElement = document.createElement('td');
//         bodyPriceElement.innerText = `${product.price}`;
//
//         const bodyStateElement = document.createElement('td');
//         bodyStateElement.innerText = product.isPresent ? 'present' : 'not present';
//
//         bodyRow.appendChild(bodyNameElement);
//         bodyRow.appendChild(bodyPriceElement);
//         bodyRow.appendChild(bodyStateElement);
//
//         tableBody.appendChild(bodyRow);
//     }
// );
//
// table.appendChild(header);
// table.appendChild(tableBody);
tableContainer.appendChild(table);

class BaseShopProductClass {
    #name;
    static DEFAULT_SCLAD = 'Default sclad';

    static #productsCounter = 0;

    constructor(name, price, isPresent) {
        this.#name = name;
        this.price = price;
        this.isPresent = isPresent;
        BaseShopProductClass.#productsCounter++;
    }

    static NumberOfProducts() {
        return this.#productsCounter;
    }
    static get productsCounter() {
        return this.#productsCounter;
    }

    // setName(name) {
    //     if (!!name && typeof name === 'string') {
    //         this.#name = name;
    //     }
    //
    //     throw Error('Incorrect name!!!');
    // }

    set name(name) {
        if (!!name && typeof name === 'string') {
            this.#name = name;
        } else {
            throw Error('Incorrect name!!!');
        }
    }

    get name() {
        return this.#name;
    }
}

class ShopProductWithCurrency extends BaseShopProductClass{
    constructor(name, price, isPresent, scladName) {
        super(name, price, isPresent);

        this.scladName = scladName ?? BaseShopProductClass.DEFAULT_SCLAD;
    }

    getPriceInUSD(currency) {
        if (currency) {
            return this.price / currency;
        }

        throw Error('Currency is required!!!');
    }
}

const apple = new ShopProductWithCurrency('Apple', 10, true);
const orange = new ShopProductWithCurrency('Orange', 20, false);
const macadamia = new ShopProductWithCurrency('Macadamia', 100, true);
apple.name = '12345';
const priceInUsd = apple.getPriceInUSD(2.5);
console.log(priceInUsd);
console.log(apple);
console.log(BaseShopProductClass.NumberOfProducts())
console.log(BaseShopProductClass.productsCounter);

// function ShopProduct(name, price, isPresent) {
//     this.name = name;
//     this.price = price;
//     this.isPresent = isPresent;
//
//     this.getPriceInUSD = function (currency) {
//         if (currency) {
//             return this.price / currency;
//         }
//
//         throw Error('Currency is required!!!');
//     }
// }
//
// const apple = new ShopProduct('Apple', 10, true);
// console.log(apple.getPriceInUSD(2.5))

const copy = Object.assign(Object.create(Object.getPrototypeOf(apple)), apple);
console.log(copy);
// console.log(copy.name);
console.log(copy.getPriceInUSD(2.5));
