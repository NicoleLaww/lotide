const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);// PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);// PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);// FAIL
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);// FAIL
