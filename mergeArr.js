function mergeArr(arr1, arr2) {
//loop through shorter array
// check each element if it is greater than or less than the middle element of the longer array
// if greater, check right half, etc.
// if less, check the left half, etc.
//stop once arry index of two sides are congruous

  const bigArr = arr1.concat(arr2);
  return bigArr.sort();

}

console.log(mergeArr([1, 3, 5],[2,4 ]));