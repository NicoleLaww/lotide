// function that makes sure that the expected values === to actual values of the function you are running
const assertEqual = function(actual, expected) {
  if (actual === expected) {// if actual equals to expected
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);// Passes
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);// Fails
  }
};
// function counting only specific objects
// allItemsArr: an array of strings that we need to look through
// itemsToCountObj: an object specifying what to count
const countOnly = function(allItemsArr, itemsToCountObj) {
  const results = {};// create empty object
  for (const item of allItemsArr) {// loop through all items of the array
    if (itemsToCountObj[item]) {//checking what names to count, what names is true
      if (results[item]) {// check if name exists in object
        results[item] += 1;// if does, add one
      } else {
        results[item] = 1;// if it doesn't, assign one
      }
    }
  }
  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);