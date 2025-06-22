const fs = require("fs");
/* 
    function logName() {
    console.log("Adnan");
    }
    setTimeout(logName, 3000);

    //* callbacked based approach
    //* promise based approach

    function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function callback() {
    console.log("3 seconds have passed");
    }
    setTimeoutPromisified(3000).then(callback);

*/

function waitFor3S(resolve) {
  // here resolve is a parameter
  setTimeout(resolve, 3000);
}

function setTimeoutPromisified(ms) {
  return new Promise(waitFor3S);
}

function main() {
  console.log("Hello World !");
}

setTimeoutPromisified().then(main);

// another example

function random(resolve) {
  resolve();
}

let p = new Promise(random);

function callback() {
  console.log("Promise Succeded");
}

p.then(callback);

// Promisified version of fs.readFile

function readTheFile(sendTheFinalValue) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    sendTheFinalValue(data);
  });
}

function readFile(fileName) {
  // read the file and return it's value
  return new Promise(readTheFile);
}

const q = readFile("a.txt");

function callBack(contents) {
  console.log(contents);
}

q.then(callBack);

// make the promise more simple

console.log("-------- Top of the file --------");

function readTheFile(resolve) {
  console.log("readTheFile called");
  setTimeout(function () {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified(fileName) {
  console.log("setTimeoutPromisified called");
  return new Promise(readTheFile);
}

const w = setTimeoutPromisified();

function callback() {
  console.log("Time is Done");
}

w.then(callback);

console.log("---------------- end of the file ------------");
