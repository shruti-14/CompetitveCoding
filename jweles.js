//Jweles and stones problem

J = "z";
S = "ZZ"
var numJewelsInStones = function (J, S) {

  var jwelArray = J.split("");
  var stoneArray = S.split("");
  // console.log(jwelArray);
  var map = {};
  var count = 0;
  jwelArray.forEach(function (e) {
    map[e] = 0;
  });
  stoneArray.forEach(function (e) {
    if (map.hasOwnProperty(e)) {
      count++;
    }
    // console.log(map.hasOwnProperty(e));
  });
  console.log(count);

};

numJewelsInStones(J, S);

