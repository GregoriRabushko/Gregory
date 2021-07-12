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
