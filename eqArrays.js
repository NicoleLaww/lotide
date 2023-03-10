// function comparing two arrays using same length and same value
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {// if arr1's length does not equal to arr2's
    return false;// returns false, ends here
  } else {// if arr1's length equals to arr2's
    for (let i = 0; i <= arr1.length; i++) {// loop through each element of arr1
      if (arr1[i] !== arr2[i]) {// if arr1[i] does not equal arr2[i]
        return false;// return false, ends here
      }
    }
  }
  return true;// if same length and arr[i] equals arr2[i], return true, ends here
};

module.exports = eqArrays;