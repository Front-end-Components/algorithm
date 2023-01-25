// 문자열의 0을 제거한 뒤, 남은 문자열의 길이를 2진법으로 바꾸는 함수
function removeZero(s) {
  const str = s.replace(/0/g, '');

  return str.length.toString(2);
}

function solution(s) {
  let count = 0; // 이진 변환 횟수
  let zeroCount = [...s].filter((str) => str === '0').length; // 제거된 0의 갯수(변환 전 0의 개수를 카운트)

  // s가 '1'이 될 때까지 반복
  // s를 이진 변환해주고, count를 1 올려준다.
  // 변환 후 0의 갯수를 zeroCount에 누적해줌
  while (s !== '1') {
    s = removeZero(s);
    count++;
    zeroCount += [...s].filter((str) => str === '0').length;
  }

  return [count, zeroCount];
}
