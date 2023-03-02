// // function that makes sure the the expected value(s) === to actual value(s) of the function you are running
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {// if actual equals to expected
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails
//   }
// };

const findKey = function(object, callback) {
  for (let key in object) {// looping through object keys
    let finalKey = "";
    console.log(key);
    console.log(callback(key));
    if (callback(key)) {
      finalKey += key;
      console.log(finalKey);
    } else {
      finalKey += undefined;
      console.log(finalKey);
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"