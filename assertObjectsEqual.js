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

// function that compares objects, same length & same value
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {// there are not the same amount of keys in the objects
    return false;
  }
  for (let key of keys1) {// looping through keys
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {// if the values are arrays
      if (eqArrays(object1[key], object2[key])) {// run through function eqArrays to check if they are same
        return true;
      }
    } else if (object1[key] !== object2[key]) {// if values are not arrays and are not the same
      return false;
    }
  }
  return true;
};

// function that makes sure that the expected values of an object === to actual values of the object you are comparing to
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;// returns a string representation of the objects
  if (eqObjects(obj1, obj2)) {// calling eqObject, if it is true
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);// Passes
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== !${inspect(obj2)}`);// Fails
  }
};

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// assertObjectsEqual(multiColorShirtObject  , anotherMultiColorShirtObject);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
// assertObjectsEqual(multiColorShirtObject  , longSleeveMultiColorShirtObject);

module.exports = assertObjectsEqual;