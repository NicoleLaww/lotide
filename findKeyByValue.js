
// function that makes sure the the expected value(s) === to actual value(s) of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function that scans the object and returns the first key which contains the given value. If no key with that value, return undefined.
const findKeyByValue = function(object, value) {
  let keyFinal = "";
  const keys = Object.keys(object);// creating a var keys, that will display all keys in the object
  for (let i = 0; i < keys.length; i++) {// looping through keys
    const multipleValues = object[keys[i]];// create var multipleValues, that will display all values in the object
    if (multipleValues === value) {// if values equals to inputted value
      keyFinal = keys[i];// key is assigned to keyFinal
      break;
    } else {
      keyFinal = undefined;// if values do not equal to inputted value, undefined is assigned
    }
  }
  return keyFinal;
};

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// findKeyByValue(bestTVShowsByGenre, "The Wire");
// findKeyByValue(bestTVShowsByGenre, "That '70s Show");

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;

