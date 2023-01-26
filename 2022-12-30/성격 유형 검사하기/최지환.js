function solution(survey, choices) {
  let answer = '';
  // 성격 유형을 객체로 선언해줌
  let scoreObj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  // survey 배열을 순회하며 choices의 값이 4이하일 때는 인덱스의 앞글자가 key,
  // 4 이상일 때는 뒷 글자가 key이다. 해당 키의 value를 계산해서 더해줌
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] < 4) {
      scoreObj[survey[i].slice(0, 1)] += 4 - choices[i];
    } else if (choices[i] > 4) {
      scoreObj[survey[i].slice(1, 2)] += choices[i] - 4;
    }
  }

  // 지표별로 조건문을 통해 성격유형에 차례대로 더해준다.
  scoreObj['R'] < scoreObj['T'] ? (answer += 'T') : (answer += 'R');
  scoreObj['C'] < scoreObj['F'] ? (answer += 'F') : (answer += 'C');
  scoreObj['J'] < scoreObj['M'] ? (answer += 'M') : (answer += 'J');
  scoreObj['A'] < scoreObj['N'] ? (answer += 'N') : (answer += 'A');

  return answer;
}
