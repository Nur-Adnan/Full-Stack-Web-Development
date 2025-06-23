/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
  /*   
    - .replace(/[\W_]/g, "") → removes all non-letter and non-number characters (like spaces, commas, symbols, and underscores).
    - \W matches anything that's not a letter or digit.
    - _ is added explicitly to remove underscores.
    - g means "global" (apply to all parts of the string).
    📌 Example: js Copy Edit
        "A man, a plan, a canal: Panama"
        ↓ to lowercase
        "a man, a plan, a canal: panama"
        ↓ remove spaces and punctuation
        "amanaplanacanalpanama"
 */
  const reversedStr = cleanStr.split("").reverse().join("");
  // .split("") → turns the string into an array of letters.
  // .reverse() → reverses the array.
  // .join("") → joins the letters back into a string.
  return cleanStr === reversedStr;
}
