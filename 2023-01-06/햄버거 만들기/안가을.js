function solution(ingredient) {
  let answer = 0;
  const stack = [];

  // 주어진 재료 배열의 요소들을 하나씩 꺼냄
  ingredient.forEach((item) => {
    // 스택 배열에 현재 요소를 push 함
    stack.push(item);

    // 스택 배열의 길이가 4보다 같거나 클 경우 (햄버거의 길이)
    if (stack.length >= 4) {
      // 스택 배열의 뒤에서 4번째부터 마지막까지 자른 후 문자열로 이어붙임
      // 해당 값이 '1231' 과 같을 경우
      if (stack.slice(-4).join('') === '1231') {
        // 정답 변수에 1을 더해줌
        answer++;

        // 스택 배열의 뒤에서 4번째부터 마지막까지의 요소 삭제
        stack.splice(-4);
      }
    }
  });

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
