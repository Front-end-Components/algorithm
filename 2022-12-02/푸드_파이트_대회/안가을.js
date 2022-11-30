function solution(food) {
  let answer = [];

  // 정답 배열에 미리 물을 의미하는 0을 넣어 놓음
  answer.push(0);

  // 주어진 food 배열의 뒤에서부터 인덱싱함
  for (let i = food.length - 1; i > 0; i--) {
    // 현재 배열의 요소가 1보다 클 때까지 반복함
    // 2개 이상일 경우 부터 양쪽에 배치 가능
    while (food[i] > 1) {
      // 정답 배열의 맨 앞에 해당 요소를 넣음
      answer.unshift(i);
      // 정답 배열의 맨 뒤에 해당 요소를 넣음
      answer.push(i);
      // 주어진 food 배열의 해당 요소의 값에 -2를 해줌
      food[i] = food[i] - 2;
    }
  }
  // 정답 배열을 문자열로 이어붙여 반환함
  return answer.join('');
}

console.log(solution([1, 3, 4, 6])); // 1223330333221
console.log(solution([1, 7, 1, 2])); // 111303111
