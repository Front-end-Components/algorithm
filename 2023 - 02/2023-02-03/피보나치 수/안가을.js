function solution(n) {
  // n은 2 이상의 정수이기 때문에 stack 배열에 미리 0~1번째 피보나치 수를 넣어놓음
  let stack = [0, 1];

  // 2부터 n까지 1씩 증가하면서 반복함
  for (let i = 2; i <= n; i++) {
    // stack 배열의 0번째 요소와 1번째 요소를 더하여(피보나치 수) 1234567로 나눈 나머지 값을 해당 배열에 넣음
    stack.push((stack[0] + stack[1]) % 1234567);

    // stack 배열의 제일 첫번째 요소를 삭제함 (피보나치 수는 두 개의 숫자만 더하면 되기 때문)
    stack.shift();
  }

  // stack 배열의 1번째 요소를 리턴함 (n번째 피보나치 수)
  return stack[1];
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
