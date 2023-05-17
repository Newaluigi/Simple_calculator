// let total = 0;

// function addition(x) {
//   total += x;
//   return total;
// }

// function soustraction(x) {
//   total -= x;
//   return total;
// }

// function division(x) {
//   if (total === 0) {
//     return (total = x);
//   } else {
//     total /= x;
//     return total;
//   }
// }

// function multiplication(x) {
//   if (total === 0) {
//     return (total = x);
//   } else {
//     total *= x;
//     return total;
//   }
// }

// function reset() {
//   total = 0;
// }

// *************SOLUTION****************************

console.log("hello !");

let firstValue = parseInt(prompt("Enter a number"));
let operator = prompt("Enter an operator");
let secondValue = parseInt(prompt("Enter a number"));

function calculator(firstNumber, myOperator, secondNumber) {
  let result;
  switch (myOperator) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "/":
      result =
        secondNumber === 0
          ? "You'll blow the universe"
          : firstNumber / SecondNumbe;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    default:
      result = false;
      break;
  }

  //   const result = firstNumber + myOperator + secondNumber;
  let message;
  if (isNaN(firstNumber) || isNan(secondNumber) || result) {
    message = "Please enter a number";
  } else {
    message = `${firstNumber} ${myOperator} ${secondNumber} = ${result}`;
  }

  return message;
}

// console.log(firstValue + operator + secondValue);
console.log(calculator(firstValue, operator, secondValue));
