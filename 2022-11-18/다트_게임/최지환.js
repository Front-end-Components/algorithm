function solution(dartResult) {
  let answer = 0;
  let score = 0;
  let arr = [];

  // 입력 받은 문자열 길이 만큼 반복
  for (let i = 0; i < dartResult.length; i++) {
    // 숫자일 경우
    if (!isNaN(Number(dartResult[i]))) {
      // 10은 따로 처리
      if (Number(dartResult[i]) === 1 && Number(dartResult[i + 1]) === 0) {
        score = 10;
        i++;
      } else {
        score = Number(dartResult[i]);
      }
    }

    // 문자일 경우 점수 처리
    if (dartResult[i] === "S") arr.push(score);
    if (dartResult[i] === "D") arr.push(Math.pow(score, 2));
    if (dartResult[i] === "T") arr.push(Math.pow(score, 3));
    if (dartResult[i] === "#") arr[arr.length - 1] *= -1;
    if (dartResult[i] === "*") {
      arr[arr.length - 1] *= 2;
      arr[arr.length - 2] *= 2;
    }
  }

  // 점수가 담긴 arr 배열의 총합
  for (var i = 0; i < arr.length; i++) {
    answer += arr[i];
  }

  return answer;
}
