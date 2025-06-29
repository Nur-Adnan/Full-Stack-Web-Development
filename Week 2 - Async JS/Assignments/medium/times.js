/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
  const startTime = new Date().getTime();

  // Perform the computation (calculate sum from 1 to n)
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  const endTime = new Date().getTime();

  // Calculate the time difference in seconds
  const timeDiff = (endTime - startTime) / 1000;
  // 1000 to convert milliseconds to seconds.

  return timeDiff;
}

const time1 = calculateTime(100);
console.log(`Time taken for sum from 1 to 100: ${time1} seconds`);

const time2 = calculateTime(100000);
console.log(`Time taken for sum from 1 to 100000: ${time2} seconds`);

const time3 = calculateTime(10000000000);
console.log(`Time taken for sum from 1 to 1000000000: ${time3} seconds`);
