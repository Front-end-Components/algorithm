function solution(babbling) {
  let answer = 0;

  // 두 번 이상 같은 단어가 반복되는 정규표현식
  // () : 그룹화 (하위표현식)
  // | : 또는
  // \ : 역참조, \n 으로 하위표현식 참조 가능
  // \1 : 첫번째 그룹을 역참조하여 두 번 단어를 반복
  // + : 1회 이상 연속으로 반복되는 문자
  const invalid = /(aya|ye|woo|ma)\1+/;

  // 해당 단어들의 반복으로만 이루어진 정규표현식
  // ^ : 시작
  // () : 그룹화
  // | : 또는
  // + : 1회 이상 연속으로 반복되는 문자
  // $ : 끝
  const valid = /^(aya|ye|woo|ma)+$/;

  // 주어진 배열의 요소들을 하나씩 꺼냄
  babbling.forEach((item) => {
    // 두 번 이상 같은 단어가 반복되지 않고, 해당 단어들의 반복으로만 이루어졌으면 +1, 아니면 +0
    answer += !invalid.test(item) && valid.test(item) ? 1 : 0;
  });
  return answer;
}

console.log(solution(['aya', 'yee', 'u', 'maa'])); // 1
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2
