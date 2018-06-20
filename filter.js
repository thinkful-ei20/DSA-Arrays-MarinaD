//O(n)
// Since the algorithm relies on pushing items to a new array, it should probably be optimized
// for larger data sets.

function filter(arr){
  const result = []; 
  arr.map(item => {
    if (item >= 5){
      result.push(item);
    }    
  });

  return result;
}

console.log(filter([1,2,30,55, 90, 100]));