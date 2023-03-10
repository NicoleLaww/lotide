const eqArrays = require('./eqArrays');

// function that makes sure that the expected values of an array === to actual values the array you are comparing to
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {//if the arrays are the same
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);// Passes
  } else {//if not
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);// Fails
  }
};

module.exports = assertArraysEqual;
