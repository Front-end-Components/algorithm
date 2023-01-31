function solution(s) {
  const stack = [];

  // 0부터 주어진 문자열 s의 길이보다 작을때 까지 1씩 증가하며 반복함
  for (let i = 0; i < s.length; i++) {
    // stack 배열의 마지막 요소가 현재 순회 요소와 동일할 경우
    if (stack[stack.length - 1] === s[i]) {
      // stack 배열의 마지막 요소를 제거함 (같은 문자를 짝지어 제거함)
      stack.pop();
      // 동일하지 않을 경우
    } else {
      // stack 배열의 끝에 현재 순회 요소를 넣음 (다음 순회에서 해당 요소를 비교하기 위함)
      stack.push(s[i]);
    }
  }

  // stack 배열의 길이가 0일 경우 모든 문자를 짝지어 제거한 것이므로 1을 리턴함
  // 0이 아닐 경우 배열에 짝지으지 못한 문자가 남아있는 것이므로 0을 리턴함
  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa')); // 1
console.log(solution('cdcd')); // 0
