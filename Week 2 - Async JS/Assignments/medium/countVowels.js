/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const strA = str.toLowerCase();
  const strArrayA = Array.from(strA);
  // "hello" → ["h", "e", "l", "l", "o"]
  const spiltArray1 = strArrayA.slice().sort();
  // Makes a copy of the array using .slice().
  // ["h", "e", "l", "l", "o"] → ["e", "h", "l", "l", "o"]
  const Vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < spiltArray1.length; i++) {
    if (Vowels.includes(spiltArray1[i])) {
      count++;
    }
  }
  return count;
}
