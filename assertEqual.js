// function that makes sure the the expected value(s) === to actual value(s) of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected
    console.log(`โโโ Assertion Passed: ${actual} === ${expected}`);// Passes
  } else {
    console.log(`๐๐๐Assertion Failed: ${actual} !== ${expected}`);// Fails
  }
};

module.exports = assertEqual;