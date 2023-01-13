function solution(s) {
  let answer = 0;
  let cntX = 0;
  let cntY = 0;
  let target = '';

  // 0부터 주어진 문자열 s의 길이만큼 반복
  for (let i = 0; i < s.length; i++) {
    // target 이 빈 문자열일 경우  현재 요소를 넣어줌 (비교할 변수 초기화)
    // 맨 처음 for 문에 들어왔을 경우
    // target 변수가 초기화된 후 for 문에 들어왔을 경우
    if (!target) target = s[i];

    // arget 과 현재 요소의 값이 같을 경우 X를 카운트,
    // 아닐 경우 Y를 카운트 (Y는 임의의 이름)
    target === s[i] ? cntX++ : cntY++;

    // 두 카운트 값이 같을 경우
    if (cntX === cntY) {
      // 정답 변수에 1을 더해줌
      answer++;
      // X카운트, Y카운트 값, 비교할 변수 초기화
      cntX = 0;
      cntY = 0;
      target = '';
    }
  }

  // for 문이 종료된 후 target 값이 있을 경우
  // 분리되고 남은 문자이므로 정답 변수에 1을 더해줌
  if (target) answer++;
  return answer;
}

console.log(solution('banana')); // 3
console.log(solution('abracadabra')); // 6
console.log(solution('aaabbaccccabba')); // 3
