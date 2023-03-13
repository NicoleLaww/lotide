// function that makes sure that the expected values of an array === to actual values the array you are comparing to
const assertArraysEqual = function(arr1, arr2) {
  let sameLength = arr1.length === arr2.length;// define var sameLength, if arr1 and arr2 have the same length
  let sameValues = true;// define var sameValues, default to true
  for (let i = 0; i <= arr1.length; i++) {// loop through each element of arr1
    if (arr1[i] !== arr2[i]) {// if arr1[i] does not equal to arr2[i]
      sameValues = false;// sameValues changes to false
      break;
    }
  }
  if (sameValues && sameLength) {// if the arrays have the same length and same values
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);// Fails
  }
};

// function that helps filter out unwanted data
const without = (arr1, arr2) => {
  let newArr = [];// create empty array
  for (let i = 0; i < arr1.length; i++) {// loop through each element of arr1
    let found = false;// define var found as false
    for (let j = 0; j < arr2.length; j++) {// loop through each element of arr2
      if (arr1[i] === arr2[j]) {// if arr1[i] equals to arr2[j]
        found = true;// found changes to true
      }
    } if (!found) {// if not found
      newArr.push(arr1[i]);// pushing to newArr
    }
  }
  return newArr;
};

// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); //PASS

module.exports = without;