function solution(X, Y) {
  let answer = [];
  const nums = new Map();

  // map 에 X 배열의 요소들의 이름으로 값을 넣음
  for (let x of X) {
    // 이미 해당 이름을 key 로 가진 값이 존재하는 경우 해당 값 + 1
    // 존재하지 않는 경우 0 + 1
    nums.set(x, (nums.get(x) || 0) + 1);
  }

  // map 에서 Y 배열의 요소들의 이름으로 값을 찾음
  for (let y of Y) {
    // 해당 이름을 key 로 찾은 값이 0보다 클 경우
    if (nums.get(y) > 0) {
      // 정답 배열에 Y 배열의 해당 요소를 넣음
      answer.push(y);
      // map 에서 해당 이름을 key 로 찾은 값 - 1
      nums.set(y, nums.get(y) - 1);
    }
  }
  // 정답 배열의 길이가 0보다 클 경우 내림차순으로 정렬 후 문자열로 만들어 정답 변수에 할당함
  // 0보다 작거나 같을 경우 '-1' 문자열을 정답 변수에 할당함
  answer = answer.length > 0 ? answer.sort((a, b) => b - a).join('') : '-1';

  // 정답 변수 값을 숫자형 데이터로 변환한 값이 0인 경우 '0' 문자열을 정답 변수에 할당함
  if (Number(answer) === 0) {
    answer = '0';
  }
  return answer;
}

console.log(solution('100', '2345')); // "-1"
console.log(solution('100', '203045')); // "0"
console.log(solution('100', '123450')); // "10"
console.log(solution('12321', '42531')); // "321"
console.log(solution('5525', '1255')); // "552"
