const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) { // go through each letter of the sentence
    if (sentence[i] !== " ") { // letter doesn't equal to space is true!
      if (!results[sentence[i]]) { // {i} does not exist then...
        results[sentence[i]] = [i]; 
      } else { // if {i} already exists 
        results[sentence[i]].push(i);
      }
    }
  }
  console.log(results);
};

letterPositions("lighthouse in the house");
letterPositions("hello");


assertArraysEqual(letterPositions("hello").e, [1]);

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
  let sameLength = arr1.length === arr2.length;
  let sameValues = true;
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      sameValues = false;
      break;
    }
  }
  if (sameValues && sameLength) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

/*
const assertArraysEqual = function(arr1, arr2) {
   if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
*/ 
