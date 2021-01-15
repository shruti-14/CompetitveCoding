
function staircase(n) {
    for(let i= 0; i < n ; i++) {
      let linePattern = '';
      for(let j =0;j<n-1-i;j++) {
        linePattern += ' ';
      }
      for(let k=1; k<=i+1;k++) {
        linePattern += '#';
      }
      console.log(linePattern);
    }
  }
  staircase(6);
  