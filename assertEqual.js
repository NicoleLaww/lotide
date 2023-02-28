// function that makes sure the the expected value(s) === to actual value of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 1);
assertEqual("Nicole Law", "Nicole Law");