// Check whether two strings contain same characters in same order

const str1 = "eeksg";
const str2 = "geeeeks";

const set1 = new Set(str1.toLowerCase().split(''));
const set2 = new Set(str2.toLowerCase().split(''));
// console.log(set1, set2);

function isEqual(a,b) {
  // return a.size === b.size && [...a].every(e=>b.has(e))
  return [...a].join('') == [...b].join('');
}
console.log(isEqual(set1,set2));