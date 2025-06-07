function isEven(number) {
  return number % 2 === 0;
}

function checkNumber() {
  let num = parseInt(document.getElementById("num").value);
  let result = isEven(num) ? "Even" : "Odd";
  document.getElementById("output").textContent = result;
}
