function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    console.log(str);
    return (str == str.split('').reverse().join(''));
  }
  
  var answer=isPalindrome("mad am");
  console.log(answer)
  