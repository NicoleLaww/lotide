// function comparing two arrays using same length and same value
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {// if arr1's length does not equal to arr2's
    return false;
  } else {// if arr1's length equals to arr2's
    for (let i = 0; i <= arr1.length; i++) {// loop through each element of arr1
      if (arr1[i] !== arr2[i]) {// if arr1[i] does not equal arr2[i]
        return false;
      }
    }
  }
  return true;
};

// function that makes sure the the expected value(s) === to actual value(s) of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function that compares objects, same length & same value
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
      return false;
    } else if (object1[key] !== object2[key]) {// if values are not arrays and are not the same
      return false;
    }
  }
  return true;
};

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };

// eqObjects(shirtObject , anotherShirtObject); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false

// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
// assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
// assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);

module.exports = eqObjects;
