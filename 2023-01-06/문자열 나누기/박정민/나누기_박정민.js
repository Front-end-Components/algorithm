function solution(s) {
  let x_count = 0;
  let not_x = 0;
  let result = 0;
  
  for(let i = 0; i < s.length; i++) {
      let x = s[0];

      if(s[i] === x) {
          x_count++;
      } else {
          not_x++;
      }

      if(x_count === not_x) {
          s = s.substring(x_count + not_x);
          result++;
          x_count = 0;
          not_x = 0;
          i = -1;
      }
  }

  return s.length > 0 ? result + 1: result;
}