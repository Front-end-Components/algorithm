function solution(x, n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    answer[i] = x + i * x;
  }

  return answer;
}
