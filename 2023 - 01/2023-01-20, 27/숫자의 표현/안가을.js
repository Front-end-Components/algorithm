function solution(n) {
  let answer = 0;

  // 더하기를 시작할 숫자
  let start = 1;

  // 더하기를 시작할 숫자가 n보다 작거나 같을 때 까지 반복
  while (start <= n) {
    let sum = 0;

    // 더하기를 시작할 숫자부터 n까지 반복
    for (let i = start; sum <= n; i++) {
      // 합계 변수에 i를 누적함
      sum += i;

      // 합계가 n과 같을 경우 정답 변수에 1을 더해줌
      if (sum === n) answer++;
    }

    // 더하기를 시작할 숫자 변수에 1을 더해줌
    start++;
  }
  return answer;
}

console.log(solution(15)); // 4
