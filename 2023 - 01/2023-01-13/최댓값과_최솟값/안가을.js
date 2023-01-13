function solution(s) {
  let answer = '';
  // 주어진 문자열을 공백으로 구분해 쪼개어 변수에 할당함
  const numbers = s.split(' ');

  // 배열 요소 중 최소값 + 공백 + 배열의 요소 중 최대값을 정답 변수에 할당하여 리턴함
  answer = Math.min(...numbers) + ' ' + Math.max(...numbers);
  return answer;
}

console.log(solution('1 2 3 4')); // 1 4
console.log(solution('-1 -2 -3 -4')); // -4 -1
console.log(solution('-1 -1')); // -1 -1
