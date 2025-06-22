const fs = require("fs");

const content = fs.readFileSync("a.txt", "utf-8");
console.log(content);

// using callback

function print(err, data) {
  if (err) {
    console.log("File doesn't exit");
  } else {
    console.log(data);
  }
}

fs.readFile("a.txt", "utf-8", print); // async
fs.readFile("b.txt", "utf-8", print); // async

console.log("Done !");

// find the sum from 1 to a number

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}

const ans = sum(10);
console.log(ans);

// callback function

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function doOperation(a, b, op) {
  return op(a, b);
}

const operation = doOperation(1, 2, add);
console.log(operation);
