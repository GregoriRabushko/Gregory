/**
 * Урок 1. Применение знаний о переменных и опрераторах.
 *
 * 1.1 Создай переменную calculationResult, в которую будешь помещать результат вычисления.
 * 1.2 Создай две переменные, в которые получи введённые значения.
 *     Подсказка: вытащи их по id и сразу возьми значение поля value.
 * 2.1 Присвой в переменную calculationResult результат сложения этих двух переменных.
 */

function sum() {
 let calculationResult;
const a = +document.getElementById('first').value;
const b = +document.getElementById('second').value; 
 calculationResult = a + b; 
 return calculationResult
}

const setResult = function() {
    document.getElementById('resultField').innerText = sum().toString();
}

document.getElementById('resultButton').onclick = setResult