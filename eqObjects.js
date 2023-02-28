// function that makes sure the the expected value(s) === to actual value of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails
  }
};

// function that compares if two objects are the same 
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);// create a var keys1 for all the keys for object1
  const keys2 = Object.keys(object2);// create a var keys2 for all the keys for object2
  console.log(keys1);
  console.log(keys2); 
  console.log(keys2.length);
  console.log(keys1.length);
  if (keys1.length !== keys2.length) {// there are not the same amount of keys in the objects
    return false; 
  } else {// if objects' have the same amount of keys 
    for (let i = 0; i < keys1.length; i++) {
      console.log(object1[keys1[i]]);
      console.log(object1[keys2[i]]); 
      if (object1[keys1[i]] !== object2[keys2[i]]) {
        return false;
      }
    }
  }
return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };

eqObjects(shirtObject , anotherShirtObject); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false

// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);