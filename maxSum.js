//O(n^2)
// Since quadratic complexity is not very good, it would be nice if this
// function could be optimized- however we aren't really sure how to optimize
// further.


function maxSum(arr){
  let maxTotal = 0;
  const reducer = (a, b) => a + b;

  for (let beg = 0; beg < arr.length; beg++){ 
    for (let end = beg; end < arr.length; end ++){
      const total = arr.slice(beg, end+1).reduce(reducer);
      if(total > maxTotal){
        maxTotal = total;
      }
    }
  }

  return maxTotal;
}

console.log(maxSum([-4,6,-3,5,-2,-1]));