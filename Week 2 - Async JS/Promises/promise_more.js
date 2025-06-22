/*

    function doAsync(resolve) {
    setTimeout(resolve, 3000);
    }

    function setTimeoutPromisified() {
    return new Promise(doAsync);
    }

    const p = setTimeoutPromisified();

    function callback() {
    console.log("3 secons passed");
    }

    p.then(callback);

 */

// another way to do the same thing

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function callback() {
  console.log("Time has Passed");
}

const p = setTimeoutPromisified(5000);
p.then(callback);

// another way to understand promise

function promiseFn(resolve) {
  let c = 0;
  for (let i = 0; i < 10000000; i++) {
    c++;
  }
  resolve();
}

const q = new Promise(promiseFn);

function callback() {
  console.log("Hi There!");
}

q.then(callback);
