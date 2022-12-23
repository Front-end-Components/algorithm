function solution(n, lost, reserve) {
  let answer = 0;
  let map = new Map();

  // 1부터 학생수까지 반복하면서 map에 학생 숫자를 key, 체육복 갯수를 value 로 넣음
  for (let i = 1; i <= n; i++) {
    // 체육복 갯수의 기본값은 1
    let count = 1;
    // lost 배열에 있는 학생 숫자일 경우 체육복 갯수 - 1
    if (lost.includes(i)) count -= 1;
    // reserve 배열에 있는 학생 숫자일 경우 체육복 갯수 + 1
    if (reserve.includes(i)) count += 1;
    map.set(i, count);
  }

  // 1부터 학생수까지 반복하면서 체육복을 빌려줌
  for (let i = 1; i <= n; i++) {
    // 해당 학생 value 가 0일 경우
    if (map.get(i) === 0) {
      // 앞의 학생 value 가 2일 경우
      if (map.get(i - 1) === 2) {
        // 해당 학생 value 에 1을 할당
        map.set(i, 1);
        // 앞의 학생 value 에 1을 할당
        map.set(i - 1, 1);

        // 뒤의 학생 value 가 2일 경우
      } else if (map.get(i + 1) === 2) {
        // 해당 학생 value 에 1을 할당
        map.set(i, 1);
        // 뒤의 학생 value 에 1을 할당
        map.set(i + 1, 1);
      }
    }
  }

  // map 의 value 들을 하나씩 꺼냄
  map.forEach((item) => {
    // value 값이 1 이상일 경우 정답 변수에 1씩 누적
    if (item >= 1) answer += 1;
  });

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
