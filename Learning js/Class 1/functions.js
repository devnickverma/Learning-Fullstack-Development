function sum(a, b, fnToCall) {
  let ans = a + b;
  fnToCall(ans);
}   

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

const ans = sum(2,3, displayResult);