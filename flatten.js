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

const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (!Array.isArray(arr[i])) {
    //console.log(Array.isArray(arr[i]));
      newArr.push(arr[i]);
    } else {
      let smallArr = arr[i];
      for (let j = 0; j < smallArr.length; j++) {
        newArr.push(smallArr[j]);
      }
    }
  }
  return (newArr);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);