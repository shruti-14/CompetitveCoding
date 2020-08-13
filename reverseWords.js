const input = "We are lucky";

const words = input.split(' ');
const answer = [];
words.forEach(word => {
   let reverseWord = '';
   for(let i=word.length;i>=0;i--) {
       reverseWord += word.charAt(i)
   } 
   answer.push(reverseWord);
});
console.log(answer.join(' '));