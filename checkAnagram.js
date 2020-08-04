/* check if strings are anagrams */

const str1 = 'tear';
const str2 = 'rate';
const map = {};
let isAnagram = true;
if (str1.split('').sort().join('') === str1.split('').sort().join('')) {
    console.log('anagram');
} else {
    console.log('not anagram');
}

//without inbuilt function

populateMap(str1, 1);
populateMap(str2, -1);

function populateMap(str, offset) {
    str.split('').forEach(e => {
        if (map.hasOwnProperty(e)) {
            map[e] = map[e] + offset;
        } else {
            map[e] = 1;
        }
    });
}
Object.keys(map).every(key => {
    if (map[key] !== 0) {
        isAnagram = false;
        return false;
    }
    return true;
});
console.log(isAnagram ? 'Anagram' : 'Not Anagram');