function solution(s) {
  const stack = [];

  // 문자열의 길이가 1이거나 첫번째 문자가 닫는 괄호인 경우 올바르지 않은 괄호임
  if (s.length === 1 || s[0] === ')') return false;

  // 문자열 순회
  for (let i = 0; i < s.length; i++) {
    // 열린 괄호일 경우 스택에 넣음
    // 닫힌 괄호일 경우 스택에서 꺼냄 (괄호 한쌍 제거)
    s[i] === ')' ? stack.pop() : stack.push(s[i]);
  }

  // 스택의 길이가 0보다 클 경우 올바르지 않은 괄호임 (괄호가 남아있음)
  // 스택의 길이가 0일 경우 올바른 괄호임 (괄호가 모두 제거됨)
  return stack.length > 0 ? false : true;
}

console.log(solution('()()')); // true
console.log(solution('(())()')); // true
console.log(solution(')()(')); // false
console.log(solution('(()(')); // false
