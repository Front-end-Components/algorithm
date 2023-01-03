function solution(s) {
  let stack = [];
  let result = [];
  for(let i = 0; i < s.length; i++) {
      if(!stack.includes(s[i])) {
          result.push(-1);
      } else {
          result.push(i - stack.lastIndexOf(s[i]));
      }
      stack.push(s[i]);
  }
  return result;
}