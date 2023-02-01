function solution(s) {
  if (s.length % 2 === 1) return 0;
  
  s = [...s]; // 문자열을 배열로 변환하지 않아도 수행 가능
  let stack = [];
  for(let i = 0; i < s.length; i++) {
      if(s[i] === stack[stack.length - 1]) {
          stack.pop();
      } else stack.push(s[i]);
  }
  
  return stack.length === 0 ? 1 : 0;
}