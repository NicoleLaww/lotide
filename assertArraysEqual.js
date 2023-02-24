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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); //FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]); // FAIL
