function solution(A) {
    const T = [];
    let parentObj = function(arrValue) {
     this.arrValue = arrValue;
    }
    parentObj.prototype = {
     value: function()  {
       return this.arrValue;
     }
    }
        // write your code in JavaScript (Node.js 8.9.4)
    A.forEach(a=>{
      const obj = new parentObj(a);
      T.push(obj);
    });
    return T; 
}
