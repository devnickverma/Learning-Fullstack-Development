function sum(a, b, fnToCall, fnCall) {
  let ans = a + b;
  fnToCall(ans);
  fnCall(ans);
}   

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

function sayHii(){
       console.log("Hiiii.....");
}

const ans = sum(2,3, displayResult, displayResultPassive);
setTimeout(sayHii, 3*1000); // Call a function after a certain time 
setInterval(sayHii, 1 * 1000); // Call a function multiple time after a certain time 


