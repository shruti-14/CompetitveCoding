let hashMap = new Map();
hashMap.set({a: 1},1);

for(let [key,value] of hashMap) {
    console.log(key, value);
}