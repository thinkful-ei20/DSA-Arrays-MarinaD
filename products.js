//O(n^2)
// This solution is highly inefficient and should certainly be optimized, as each new element requires n additional
// loops

function products(arr){
  const reducer = (a,b) => a*b;
  return arr.map((item, index) => {
    const newArr = [...arr];
    newArr.splice(index,1);
    return newArr.reduce(reducer);
  });
}

console.log(products([1,2,3])); // [6,3,2]