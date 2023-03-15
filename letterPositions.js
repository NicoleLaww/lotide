// function comparing two arrays using same length and same value
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {// if the length of the arrays are not the same
    return false;
  } else {
    for (let i = 0; i <= arr1.length; i++) {// loop through each element of arr1
      if (arr1[i] !== arr2[i]) {//if arr1[i] is not the same as arr2[i]
        return false;
      }
    }
  }
  return true;
};

// function that makes sure that the expected values of an array === to actual values the array you are comparing to
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {//if the arrays are the same
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {//if not
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// function that shows the index positions of the letters
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {// letter doesn't equal to space, is true!
      if (!results[sentence[i]]) { // checking if the letter in sentence exists in the object already...
        results[sentence[i]] = [i]; // if not assign it the array, assign index as well
      } else { // if letter already exists
        results[sentence[i]].push(i); // arrays can have more than one, pushing the other index
      }
    }
  }
  return results;
};

// letterPositions("lighthouse in the house");

// assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").l, [2, 3]);

module.exports = letterPositions;