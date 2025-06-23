function setTimeoutPromisified(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

function callback() {
  console.log("Time Up! ");
}

setTimeoutPromisified(3000).then(callback);
