function solution(s) {
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] === ')') {
        if(stack.length === 0) return false;
      stack.pop();
    } else {
      stack.push(i);
    }
  }
  return stack.length > 0 ? false : true;
}