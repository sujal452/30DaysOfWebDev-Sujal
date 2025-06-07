function calculate(operator) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
  } else {
    result = "Invalid operator";
  }

  document.getElementById("result").textContent = result;
}
