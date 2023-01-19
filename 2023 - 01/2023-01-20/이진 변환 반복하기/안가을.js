function solution(s) {
  let answer = [0, 0];

  // 주어진 문자열이 1이 될 때까지 반복
  while (s !== '1') {
    // 0의 갯수를 카운트해서 변수에 할당
    const zeroCnt = s.match(/0/g) ? s.match(/0/g).length : 0;

    // 0의 갯수를 정답 배열의 두번째 요소에 누적 (제거한 0의 갯수)
    answer[1] += zeroCnt;

    // 0을 제거한 문자열의 길이 : 문자열의 길이 - 0의 갯수
    const length = s.length - zeroCnt;

    // 문자열의 길이를 2진법으로 변환
    s = length.toString(2);

    // 변환 후 정답 배열의 첫번째 요소에 1을 누적 (변환 횟수)
    answer[0]++;
  }
  return answer;
}

console.log(solution('110010101001')); // [3, 8]
console.log(solution('01110')); // [3, 3]
console.log(solution('1111111')); // [4, 1]
