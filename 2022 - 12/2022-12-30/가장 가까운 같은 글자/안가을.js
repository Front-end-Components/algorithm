function solution(s) {
  // 주어진 문자열 s의 0번째 문자는 앞의 문자와 비교할 수 없음
  // 미리 정답 배열에 -1을 넣어놓음
  var answer = [-1];

  // 1부터 s의 길이 이전까지 1씩 증가하면서 반복
  for (let i = 1; i < s.length; i++) {
    // i - 1 부터 0까지 1씩 감소하면서 반복 (i의 앞의 문자와 비교)
    for (let j = i - 1; j >= 0; j--) {
      // 두 문자가 같을 경우
      if (s[i] === s[j]) {
        // 정답 변수에 i - j (i와 j의 거리) 를 넣고 빠져나감
        answer.push(i - j);
        break;
        // j가 0일 경우
        // 더 이상 비교할 앞의 문자가 없음
      } else if (j === 0) {
        // 정답 변수에 -1을 넣고 빠져나감
        answer.push(-1);
        break;
      }
    }
  }

  return answer;
}

console.log(solution('banana')); // [-1, -1, -1, 2, 2, 2]
console.log(solution('foobar')); // [-1, -1, 1, -1, -1, -1]
