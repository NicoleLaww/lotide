
/*
// function that makes sure the the expected value(s) === to actual value of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails
  }
};
*/ 

//function that scans the object and return the first key which contains the given value. If no key with that value, return undefined.
const findKeyByValue = function (object, value) {
  const key = "";// creating an empty string for our final key  
  const keys = Object.keys(object);// creating a var keys, that will display all keys in the object 
    for (let i = 0; i < keys.length; i++) {// looping through keys  
      if (object[keys[i] === value]) {
        console.log(keys);
      } else {
        return undefined 
      }   
  }
} ; 


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");


//assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);