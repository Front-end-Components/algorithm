function solution(k, m, score) {
  let answer = 0;
  // 주어진 사과 배열을 내림차순으로 정렬
  score.sort((a, b) => b - a);

  // 한 상자에 들어가는 사과의 수 - 1 부터 시작해서 한 상자에 들어가는 사과의 수만큼 증가
  for (let i = m - 1; i < score.length; i += m) {
    // score[i] : 내림차순으로 정렬된 사과 배열[한 상자에 들어가는 사과의 수 - 1]
    // 상자에 제일 마지막에 들어가는 사과의 점수
    // 사과 배열은 내림차순 이므로 해당 사과의 점수는 사과 상자에 있는 사과 중에서 최저 점수
    // i 는 항상 사과 상자의 최저 사과 점수의 인덱스를 가리킴

    // 정답 변수에 (최저 사과 점수 * 한 상자에 담긴 사과의 수) 를 누적하여 반환함
    answer += score[i] * m;
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33
