// function that returns the middle values, different for even/odd and under 3 numbers in an array
const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);// creating variable for middleIndex
  if (array.length < 3) {// if under 3 in array.length
    return [];// returns empty array
  }
  if (array.length % 2 !== 0) {// if odd, there will be 1 return value
    const middleElement = array[middleIndex];
    return [middleElement];
  }
  if (array.length % 2 === 0) {// if even, there will be 2 return values
    const middleRight = array[middleIndex];
    const middleLeft = array[middleIndex - 1];
    return [middleLeft, middleRight];
  }
};

module.exports = middle;