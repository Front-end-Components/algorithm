function solution(survey, choices) {
  let answer = '';

  // 성격유형 타입들을 미리 배열에 넣어놓음
  // 각 요소의 문자는 사전 상 빠른 순으로 들어 있음
  const types = ['RT', 'CF', 'JM', 'AN'];

  // 각 성격유형과 점수 0을 가진 객체를 미리 만들어놓음
  const score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  // survey와 choices의 길이는 같음
  choices.forEach((choice, idx) => {
    // survey에서 choices의 인덱스로 값을 찾음
    // 구조 분해 할당으로 비동의, 동의 변수 값을 초기화함
    const [disagree, agree] = survey[idx];

    // 선택한 문항이 4보다 클 경우 동의 문항, 작을 경우 비동의 문항
    // 문항 - 4 를 절대값으로 변환한 값을 누적함 (해당 문항의 점수)
    // 선택학 문항이 4일 경우 Math.abs(4 - 4) 로 0이 되기 때문에 상관없음
    score[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  // 성격유형 타입들을 하나씩 꺼냄
  types.forEach((type) => {
    // 구조 분해 할당으로 첫번째, 두번째 변수 값을 초기화함
    const [first, second] = type;

    // 두번째 값이 더 클 경우 두번째 key를 정답 변수에 누적
    // 첫번째 값이 더 클 경우 첫번째 key를 정답 변수에 누적
    // 두 값이 같을 경우 첫번째 key를 정답 변수에 누적
    // type 문자열의 각 문자는 사전 상 빠른 순으로 들어있음
    // 항상 첫번째 변수가 사전 상 더 빠른 순서임
    answer += score[first] < score[second] ? second : first;
  });

  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5])); // TCMA
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3])); // RCJA
