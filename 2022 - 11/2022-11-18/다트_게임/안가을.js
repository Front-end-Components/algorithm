function solution(dartResult) {
  // 보너스 객체를 미리 정의함 (키: 보너스 이름, 값: 해당 제곱 값)
  const bonus = { S: 1, D: 2, T: 3 };
  let answer = [];
  let temp = '';

  // 주어진 문자열을 배열로 만들어 한 문자씩 꺼냄
  dartResult.split('').forEach((item, idx) => {
    // 문자가 * 일 경우 이전 두 개의 숫자에 2를 곱해서 넣어줌
    if (item === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;

      // 문자가 # 일 경우 이전 숫자에 -1을 곱해서 넣어줌
    } else if (item === '#') {
      answer.push(answer.pop() * -1);

      // 문자가 숫자일 경우
    } else if (!isNaN(Number(item))) {
      // 다음 문자가 0일 경우 temp에 이어 붙임 (10을 저장하기 위함)
      if (dartResult[idx + 1] === '0') {
        temp += item;

        // 다음 문자가 0이 아닐 경우 temp에 이어 붙임
      } else {
        // 0~9일 경우 해당 숫자가 저장됨
        // 10일 경우 '1' += '0' 이 되어 10이 저장됨
        temp += item;
        // 정답 배열 변수에 temp를 요소로 넣음
        answer.push(Number(temp));
        // temp 변수 초기화
        temp = '';
      }

      // 문자가 숫자가 아닐 경우 (보너스인 S, D, T 중 하나)
    } else {
      // 보너스 객체에서 해당 문자로 값을 찾음
      // 이전 숫자에 해당 값을 제곱해서 넣어줌
      answer.push(answer.pop() ** bonus[item]);
    }
  });

  // 완성된 배열의 요소(숫자 값)들을 누적해서 리턴함
  return answer.reduce((acc, cur) => acc + cur);
}

console.log(solution('1S2D*3T')); // 37
console.log(solution('1D2S#10S')); // 9
