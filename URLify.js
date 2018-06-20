// O(n)
// Since the string cannot be sorted and we have no additional information,
// it is not possible to optimize the alogrithm further.

function urlify(string) {
  return string.replace(/\s/g,'%20');
}

console.log(urlify('joe brown goes to town'));

