function solution(s) {
  let x = s[0]; // 기준이 되는 x를 s의 0번째 인덱스로 초기화
  let xCount = 0;
  let anotherCount = 0;
  let answer = 0;

  // s 길이만큼 반복문을 돌려서
  // s의 i번째 인덱스가 x와 같으면 x카운트를 올려주고
  // 다르면 another카운트를 올려준다.
  // x카운트와 another카운트가 같으면 기준을 i+1번째 인덱스로 바꿔주고,
  // answer를 올려준 뒤, 카운트를 초기화해준다.
  // 2번 예시와 같이 카운트가 서로 다를 때, 더이상 읽을 글자가 없으면 answer를 올려준다.
  for (let i = 0; i < s.length; i++) {
    if (s[i] === x) {
      xCount++;
    } else {
      anotherCount++;
    }
    if (xCount === anotherCount) {
      x = s[i + 1];
      answer++;
      xCount = 0;
      anotherCount = 0;
    }
    if (xCount !== anotherCount) {
      if (s[i + 1] === undefined) {
        answer++;
      }
    }
  }

  return answer;
}
