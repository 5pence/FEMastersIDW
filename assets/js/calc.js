//event listeners
let result = document.getElementById("result");
let storedNumber = parseInt(result.innerText);
let operation;

wipeHandler = () => {
  result.innerText = '0';
}

backArrowHandler = () => {
  let initial = parseInt(result.innerText);
  result.innerText = Math.floor(initial / 10);
}

numberHandler = number => {
  let initial = result.innerText;
  if (initial === '0') initial = "";
  result.innerText = initial + number;
}

divideHandler = () => {
  storedNumber = parseInt(result.innerText);
  operation = "divide"
  wipeHandler();
}

equalsHandler = () => {
  
}