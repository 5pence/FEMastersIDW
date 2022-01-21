//event listeners
let result = document.getElementById("result");
let storedNumber;
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

operationHandler = operationType => {
  storedNumber = parseInt(result.innerText);
  operation = operationType;
  wipeHandler();
}

equalsHandler = () => {
  let initial = parseInt(result.innerText);
  let resultant;
  if (operation === 'divide') {
    resultant = storedNumber / initial;
  }
  if (operation === 'multiply') {
    resultant = storedNumber * initial;
  }
  if (operation === 'minus') {
    resultant = storedNumber - initial;
  }
  if (operation === 'add') {
    resultant = storedNumber + initial;
  }
  result.innerText = resultant.toString();
}