// function that makes sure that the expected values === to actual values of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails
  }
};

// function counting the letters in a string
const countLetters = (string) => {
  const result = {};// create empty object
  for (const letter of string) {// looping through each letter
    if (letter !== " ") {// if the letter does not equal to a space
      if (result[letter]) {// check if letter exists in object
        result[letter] += 1;// if it does, add one
      } else {
        result[letter] = 1;// if it doesn't, assign one
      }
    }
  }
  return result;// return letter count for all letters
};

// console.log(countLetters('LHL'));
// console.log(countLetters("lighthouse in the house"));

// countLetters('LHL');
// countLetters("lighthouse in the house");

// let string = "LHL";
// const result1 = countLetters(string);
// assertEqual(result1["L"], 2);// Passes

module.exports = countLetters;