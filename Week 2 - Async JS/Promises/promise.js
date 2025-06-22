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
