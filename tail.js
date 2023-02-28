// function that returns every element except the first
const tail = function(arr) {
  return arr.slice(1, arr.length);
};

// function that makes sure that the expected values === to actual value of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected 
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails 
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(tail(words));
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words).length, 2);

const empty = [];
tail(empty);
console.log(empty);
assertEqual(empty.length, 0);
assertEqual(tail(empty).length, 0);

const one = ["Nicole"];
tail(one);
console.log(tail(one));
assertEqual(one.length, 1);
assertEqual(tail(one).length, 0);