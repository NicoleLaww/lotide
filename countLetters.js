const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const result = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

console.log(countLetters('LHL'));
console.log(countLetters("lighthouse in the house"));

countLetters('LHL');
countLetters("lighthouse in the house");

let string = "LHL";
const result1 = countLetters(string);
assertEqual(result1["L"], 2);