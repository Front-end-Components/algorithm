function solution(t, p) {
  var answer = 0;

  // 0부터 t의 길이 - p의 길이까지 반복
  for (let i = 0; i <= t.length - p.length; i++) {
    // t를 i부터 p의 길이 갯수만큼 자른 값이 p보다 작거나 같을 경우 카운트
    if (t.substr(i, p.length) <= p) answer++;
  }

  return answer;
}

console.log(solution('3141592', '271')); // 2
console.log(solution('500220839878', '7')); // 8
console.log(solution('10203', '15')); // 3
