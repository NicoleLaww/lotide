// function comparing two arrays using same length and same value
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {// if arr1's length does not equal to arr2's
    return false;// returns false, ends here
  } else {// if arr1's length equals to arr2's
    for (let i = 0; i <= arr1.length; i++) {// loop through each element of arr1
      if (arr1[i] !== arr2[i]) {// if arr1[i] does not equal arr2[i]
        return false;// return false, ends here
      }
    }
  }
  return true;// if same length and arr[i] equals arr2[i], return true, ends here
};

// function that makes sure that the expected values === to actual values of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), true); // FAIL

