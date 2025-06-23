function setTimeoutPromisified(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(duration, function (err, data) {
      if (err) {
        reject();
      } else {
        resolve(data);
      }
    });
  });
}

function callback() {
  console.log("Time Done!");
}

setTimeoutPromisified(3000)
  .then(callback)
  .catch(function (x) {
    return x;
  });
