// O(n)
// As either the string or the characters to remove get larger, a constant number of additional loops are needed.
// Since the strings cannot be sorted, it seems that this is the most efficient option.

function removeChar(string, char) {

  let toMatch = '';
  for (let i = 0; i < char.length; i++){
    toMatch = toMatch + char[i] + '|'; 
  }
  toMatch = toMatch.replace(/.$/, '');
  const re = new RegExp(toMatch, 'g');
  return string.replace(re, '');
}

console.log(removeChar('Go fishg go go', 'g'));