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
  setTimeout(resolve, 3000);
}

function main() {
  console.log("main is called");
}

waitFor3S(main);
