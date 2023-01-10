function solution(A, B) {
  let answer = 0;

  // 첫 번째 배열에서 가장 작은 값 * 두 번째 배열에서 가장 큰 값 ==> 누적하면 최소값이 됨
  // A 배열을 오름차순, B 배열을 내림차순으로 정렬함
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  // 두 배열에서 동일한 인덱스의 요소들끼리 곱하여 정답 변수에 누적함
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
console.log(solution([1, 2], [3, 4])); // 10
