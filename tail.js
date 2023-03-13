// function that returns every element except the first
const tail = function(arr) {
  return arr.slice(1, arr.length);
};

module.exports = tail;

console.log(tail([]));