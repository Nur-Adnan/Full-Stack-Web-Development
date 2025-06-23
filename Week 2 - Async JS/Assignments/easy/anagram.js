// Write a function `isAnagram` which takes 2 parameter and returns true / false if those anagram or not.

// -A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

function isAnagram(str1, str2) {
  const sortedStringOne = str1.toLowerCase().split("").sort().join("");
  const sortedStringTwo = str2.toLowerCase().split("").sort().join("");

  if (sortedStringOne == sortedStringTwo) {
    console.log("True");
    return true;
  } else {
    console.log("False");
    return false;
  }
}

isAnagram("spar", "rasp");
