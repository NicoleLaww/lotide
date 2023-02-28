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

// function that flattens nested array(s) inside an array
const flatten = (arr) => {
  let newArr = [];// create an empty array
  for (let i = 0; i < arr.length; i++) {// loop through each element of the arr
    //console.log(arr[i]);
    if (!Array.isArray(arr[i])) {// is not an array
    //console.log(Array.isArray(arr[i]));
      newArr.push(arr[i]);// push number to new array
    } else {// if it is an array
      let smallArr = arr[i];// defining the smaller array
      for (let j = 0; j < smallArr.length; j++) {// loop through each element of the smaller array
        newArr.push(smallArr[j]);// push numbers in smaller array to new array
      }
    }
  }
  return (newArr);// return new array
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);