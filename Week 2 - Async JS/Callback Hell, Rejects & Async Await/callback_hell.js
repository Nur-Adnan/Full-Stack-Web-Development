function callback() {
  console.log("Hi");
}
setTimeout(callback, 3000);

//  callback hell
setTimeout(function () {
  console.log("Hello");
  setTimeout(function () {
    console.log("Hi");
    setTimeout(function () {
      console.log("There");
    }, 8000);
  }, 5000);
}, 3000);

// Alt solution (doesnt really have callback hell)
function step3Done() {
  console.log("hello there");
}

function step2Done() {
  console.log("hello");
  setTimeout(step3Done, 5000);
}

function step1Done() {
  console.log("hi");
  setTimeout(step2Done, 3000);
}

setTimeout(step1Done, 1000);

// promisified version of setTimeout
function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000).then(function () {
  console.log("hi");
  setTimeoutPromisified(3000).then(function () {
    console.log("hello");
    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });
  });
});
