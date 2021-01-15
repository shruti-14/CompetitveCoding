var balancedParens = function (input) {
  var stack = [];
  var map = {
    ')': '(',
    ']': '[',
    '}': '{'
  };
  var length = input.length;
  var i, currentChar, popped;

  for (i = 0; i < length; i += 1) {
    currentChar = input[i];
    if (isOpening(currentChar)) {
      stack.push(currentChar);
    } else if (isClosing(currentChar)) {
      popped = stack.pop();
      if (map[currentChar] !== popped) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

var isOpening = function (char) {
  return char === '(' || char === '[' || char === '{';
};

var isClosing = function (char) {
  return char === ')' || char === ']' || char === '}';
};
console.log(balancedParens('({})'));