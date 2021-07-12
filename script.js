/**
 * Урок 1. Применение знаний о переменных, опрераторах и начала изучения функций.
 *
 * 1.1 Создай переменную calculationResult, в которую будешь помещать результат вычисления.
 * 1.2 Создай две переменные, в которые получи введённые значения.
 *     Подсказка: вытащи их по id и сразу возьми значение поля value.
 * 2.1 Присвой в переменную calculationResult результат сложения этих двух переменных.
 * 3.1 Обернуть действия в функции и связать с элементами страницы.
 */

function sum() {
  let calculationResult;

  // Лучше дать этим переменным более "говорящие" имена, помогающие определить их назначение в коде
  // Например, firstNumber и secondNumber
  const a = +document.getElementById("first").value;
  const b = +document.getElementById("second").value;

  // Эти две строки можно сократить в одну, возвращая сразу результат выражения (return a + b).
  // Тогда переменная calculationResult не понадобится.
  calculationResult = a + b;
  return calculationResult;
}

const setResult = function () {
  document.getElementById("resultField").innerText = sum().toString();
};

document.getElementById("resultButton").onclick = setResult;
