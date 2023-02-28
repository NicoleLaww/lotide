const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i <= arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { // go through each letter of the sentence
    if (sentence[i] !== " ") { // letter doesn't equal to space is true!
      if (!results[sentence[i]]) { // {i} does not exist then... / checking if the letter in sentence exists in the object already...
        results[sentence[i]] = [i]; // if not assign it the array, index
      } else { // if {i} already exists
        results[sentence[i]].push(i); // arrays can have more than one, pushing
      }
    }
  }
  return results;
};

letterPositions("lighthouse in the house");
letterPositions("hello");

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);

