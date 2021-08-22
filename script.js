
  const firstNumber = +document.getElementById("first").value;
  const secondNumber = +document.getElementById("second").value;


  function sum() {
    const result = firstNumber + secondNumber;
 
    setResult(result)
  };

  
  
function sub() {
  const result = firstNumber - secondNumber;

  setResult(result)
};




function div() {
  const result = firstNumber / secondNumber;
  
  setResult(result)
};



function mult() {
  const result = firstNumber * secondNumber;
  
  setResult(result)
};

document.getElementById("sumButton").onclick = sum;
document.getElementById("subButton").onclick = sub;
document.getElementById("divButton").onclick = div;
document.getElementById("multButton").onclick = mult;

const setResult = function (result = 0) {
    document.getElementById("resultField").innerText = result.toString();
  };    
