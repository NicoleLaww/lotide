// function that makes sure that the expected values of an array === to actual values the array you are comparing to
const assertArraysEqual = function(arr1, arr2) {
  let sameLength = arr1.length === arr2.length;// defining var sameLength, arrays have the same length
  let sameValues = true;// defining var sameValues, default as true
  for (let i = 0; i <= arr1.length; i++) {// loop through each element of arr1
    if (arr1[i] !== arr2[i]) {//if arr1[i] does not equal to arr2[i]
      sameValues = false;//change sameValues to false
      break;
    }
  }
  if (sameValues && sameLength) {// arrays are same length and values
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);// Fails
  }
};


// function that returns the middle values, different for even/odd and under 3 numbers in an array
const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);// creating variable for middleIndex
  if (array.length < 3) {// if under 3 in array.length
    return [];// returns empty array
  }
  if (array.length % 2 !== 0) {// if odd, there will be 1 return value
    const middleElement = array[middleIndex];
    return [middleElement];
  }
  if (array.length % 2 === 0) {// if even, there will be 2 return values
    const middleRight = array[middleIndex];
    const middleLeft = array[middleIndex - 1];
    return [middleLeft, middleRight];
  }
};


middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(middle([1]) , []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);