const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    if (!Array.isArray(arr[i])) {
    //console.log(Array.isArray(arr[i]));
      newArr.push(arr[i]);
    } else {
      let smallArr = arr[i];
      for (let j = 0; j < smallArr.length; j++) {
        newArr.push(smallArr[j]);
      }
    }
  }
  console.log(newArr);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
