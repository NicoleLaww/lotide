// function comparing two arrays using same length and same value
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {// if the length of the arrays are not the same
    return false;// return false, ends here
  } else {// if the length of the array are the same
    for (let i = 0; i <= arr1.length; i++) {// loop through each element of arr1
      if (arr1[i] !== arr2[i]) {// if arr1[i] is not the same as arr2[i]
        return false;// return false, ends here
      }
    }
  }
  return true;// return true, ends here
};

// function that makes sure that the expected values of an array === to actual values the array you are comparing to
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {// if the arrays are the same
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);// Passes
  } else {//if not
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);// Fails
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const even = [0, 1, 2, 3, 4, 5, 6];
const odd = [1, 3, 5, 7, 9];

const map = function(array, callback) {
  const results = [];// create empty array
  for (let item of array) {// loop through each item of array
    results.push(callback(item));// run callback function and pushes result into empty array
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);// PASS
assertArraysEqual(map(even, num => {return num % 2 === 0;}), [0, 2, 4, 6]);// FAIL
assertArraysEqual(map(odd, num => {return num % 2 !== 0;}), [true, true, true, true, true]);// PASS
