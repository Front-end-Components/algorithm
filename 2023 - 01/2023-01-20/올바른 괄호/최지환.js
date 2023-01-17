function solution(s) {
  let stack = [];

  // 문자열 s길이만큼 반복하며
  // '(' 일 때와 ')' 일 때 각각 stack 에 push 해준 뒤,
  // stack의 길이가 1보다 클 때, stack의 마지막 요소가 ')' 이고,
  // 마지막 전 요소가 '(' 일 때, 둘 다 pop을 해준다.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else if (s[i] === ')') {
      stack.push(s[i]);
    }
    if (
      stack[stack.length - 1] === ')' &&
      stack[stack.length - 2] === '(' &&
      stack.length > 1
    ) {
      stack.pop();
      stack.pop();
    }
  }
  // 위 과정을 통해 스택의 길이가 0이면(모든 괄호가 올바르게 짝지어진 경우)
  // true를 반환하고 아닐 경우 false를 반환
  return stack.length === 0 ? true : false;
}
