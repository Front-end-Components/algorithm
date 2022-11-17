function solution(lottos, win_nums) {
  // 등수 배열을 미리 정의 (인덱스 : 맞춘 개수, 요소 : 등수)
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let answer = [];
  let min = 0;
  let max = 0;
  let zeroCnt = 0;

  // 민우의 로또 번호를 하나씩 꺼냄
  lottos.forEach((num) => {
    // 정답 로또 번호에 민우의 로또 번호가 들어있을 경우 min 변수에 1씩 누적함
    min += win_nums.includes(num) ? 1 : 0;
    // 민우의 로또 번호가 0일 경우 0의 개수 변수에 1씩 누적함
    zeroCnt += num === 0 ? 1 : 0;
  });

  // max 변수 : 총 맞춘 개수 + 로또 번호로 가정할 0의 최대 개수
  max = min + zeroCnt;
  // min 과 max 를 등수 배열의 키 값으로 넣어 각각의 등수를 구하고 정답 배열에 넣음
  answer = [rank[max], rank[min]];
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
