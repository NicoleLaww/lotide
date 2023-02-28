// // function that makes sure the the expected value(s) === to actual value of the function you are running
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {// if actual equals to expected
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails
//   }
// };

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);// create a var keys1 for all the keys for object1
  const keys2 = Object.keys(object2);// create a var keys2 for all the keys for object2
  const sameLength = keys1.length === keys2.length;// create a var sameLength, checking if length is the same 
  let sameValues = false; 
  if (sameLength) {
    for (let i = 0; i < keys1.length; i++) {
      if (object1[keys1[i]] === object2[keys2[i]]) {
        sameValues = true; 
      }
    }
  }
console.log(sameValues); 
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false

// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);