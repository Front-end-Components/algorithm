function solution(a, b, n) {
  let answer = 0;

  // 가지고 있는 콜라의 갯수가 가져가야할 콜라의 갯수보다 크거나 같을 때 까지 반복
  while (n >= a) {
    // 콜라의 개수 = 가진 콜라 개수 - 마트에 주는 콜라 개수 + 마트에서 받는 콜라 개수
    n = n - a + b;
    // 정답 변수에 마트에서 받는 콜라 개수를 누적함
    answer += b;
  }
  return answer;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
