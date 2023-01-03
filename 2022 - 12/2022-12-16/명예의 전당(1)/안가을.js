function solution(k, score) {
  const answer = [];
  const stack = [];

  for (let i = 0; i < score.length; i++) {
    // 스택의 길이가 k 보다 작을 경우
    if (stack.length < k) {
      // 스택에 현재 점수 넣기
      stack.push(score[i]);

      // 스택의 길이가 k 보다 크거나 같을 경우
    } else {
      // 스택에서 최소 점수보다 현재 점수가 클 경우
      if (score[i] > Math.min(...stack)) {
        // 스택에서 최소 점수 삭제
        // 밑에서 내림차순 정렬을 한 상태이기 때문에
        // 스택의 마지막 값은 최소 점수
        stack.pop();

        // 스택에 현재 점수 넣기
        stack.push(score[i]);
      }
    }
    // 스택의 요소들을 내림차순으로 정렬
    stack.sort((a, b) => b - a);

    // 스택의 마지막 값인 최소 점수를 정답 배열에 넣음
    answer.push(stack[stack.length - 1]);
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
