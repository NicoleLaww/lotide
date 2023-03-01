// function that makes sure that the expected values of an array === to actual values the array you are comparing to
const assertArraysEqual = function(arr1, arr2) {
  let sameLength = arr1.length === arr2.length;// define var sameLength -> arr1's length equals to arr2's length
  let sameValues = true;// define var sameValues -> default, set arr values to "same" aka true
  for (let i = 0; i <= arr1.length; i++) {// looping through each value of arr1
    if (arr1[i] !== arr2[i]) {// if arr1[i] does NOT equal arr2[i]
      sameValues = false;// change sameValues to false
      break;
    }
  }
  if (sameValues && sameLength) {// only when both values and length are the same
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);// Fails
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);// PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]);// FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);// PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);// FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]);// FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]);// FAIL
