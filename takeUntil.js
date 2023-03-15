// function comparing two arrays using same length and same value
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {// if the length of the arrays are not the same
    return false;// return false, ends here
  } else {// if the length of the array are the same
    for (let i = 0; i <= arr1.length; i++) {// loop through each element of arr1
      if (arr1[i] !== arr2[i]) {// if arr1[i] is not the same as arr2[i]
        return false;// return false, ends here
      }
    }
  }
  return true;// return true, ends here
};

// function that makes sure that the expected values of an array === to actual values the array you are comparing to
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {// if the arrays are the same
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);// Passes
  } else {//if not
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);// Fails
  }
};

//function will return a "slice of the array with elements taken from the beginning." Should keep going until the callback/predicate returns a truthy value.
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {// loop through each element of the array
    if (!callback(item)) {// if the callback(item) is not true
      results.push(item);// push item to array
    } else {// if it is true
      break;// break out
    }
  }
  return results;
};

// const dates = ["Past 02/28", "Present 03/01", "Future 03/02"];
// const workDates = takeUntil(dates, x => x === "Future 03/02");
// console.log(workDates);

// console.log('---');

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(workDates, ["Past 02/28", "Present 03/01"]);// Pass
// assertArraysEqual(results1, [1, 2, 5, 7]);// Fail
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood",]);// Pass


// //TESTING ONE OF THE ARROW FUNCTION
// const test = function(x) {
//   return x === ",";// returns true or false
// };

// console.log(test("Hello"));
// console.log(test(","));

module.exports = takeUntil;