//O(nlog(n))
// This function utilizes the built in sort function in javascript, which in the V8 Engine is implemented with
// nlog(n) complexity. This is still worse than linear and could probably be optimized by using binary search.

function mergeArr(arr1, arr2) {

  const bigArr = arr1.concat(arr2);
  return bigArr.sort();

}

console.log(mergeArr([1, 3, 5],[2,4 ]));