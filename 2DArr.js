//O(n^2)
// Horribly inefficient! Should certainly be optimized, at least not requiring two nested loops...

function twoDArr(arr){
  const zero = {
    row : {},
    col : {}
  };

  for (let row = 0; row < arr.length; row ++){
    for (let col = 0; col < arr[row].length; col ++){
      if (arr[row][col] === 0 ){
        zero.row[row] = true;
        zero.col[col] = true;
      }
    }
  }

  for (let row = 0; row < arr.length; row ++){
    for (let col = 0; col < arr[row].length; col ++){
      if (zero.row[row] || zero.col[col]){
        arr[row][col] = 0;
      }
    }
  }

  return arr;
}

console.log(twoDArr([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]]));