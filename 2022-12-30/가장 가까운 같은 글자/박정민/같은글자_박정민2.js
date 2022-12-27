function solution(s) {
  let first_Array = [];
  let result = [];
  for(let i = 0; i < s.length; i++) {
      if(!first_Array.includes(s[i])) {
          first_Array.push(s[i]);
          result.push(-1);
          continue;
      }
      let count = 0;
      for(let j = i-1; j >= 0; j--) {
          count++;
          if(s[i] === s[j]) {
              result.push(count);
              break;
          }
      }
  }
  return result;
}