let input = 1121;
function checkPalindrome(n) {
    let final = 0;
    let original = n;
    while(n>0) {
        let rem = n%10;
        n = parseInt(n/10);
        final = final*10+rem;
    }
    final === original ? console.log('Palindrome') : console.log('Not palindrome');
}

checkPalindrome(input);