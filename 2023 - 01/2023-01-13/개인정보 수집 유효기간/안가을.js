function solution(today, terms, privacies) {
  let answer = [];
  const map = new Map();

  // 주어진 terms 배열의 문자열을 하나씩 꺼냄
  terms.forEach((term) => {
    // 문자열을 공백으로 구분하여 나누고 변수에 구조 분해 할당함
    // type: 약관 종류, month: 유효 기간
    const [type, month] = term.split(' ');

    // map에 type를 key 값으로, month을 value 로 넣음
    map.set(type, month);
  });

  // 주어진 privacies 배열의 문자열을 하나씩 꺼냄
  privacies.forEach((privacy, idx) => {
    // 문자열을 공백으로 구분하여 나누고 변수에 구조 분해 할당함
    // date: 개인정보 수집 일자, type: 약관 종류
    const [date, type] = privacy.split(' ');

    // date 를 인수로 전달해 Date 객체를 만들어 expiredDate 변수에 할당함
    const expiredDate = new Date(date);

    // expiredDate 변수에 할당된 Date 객체의 월을 설정함
    // 현재 월 + map에서 type을 key 값으로 찾은 값(유효 기간)을 숫자로 변환한 값 === 만료 일자
    expiredDate.setMonth(expiredDate.getMonth() + Number(map.get(type)));

    // 현재 날짜로 생성한 Date 객체가 expiredDate 변수에 할당된 Date 객체보다 크거나 같을 경우
    if (new Date(today) >= expiredDate) {
      // 유효기간이 지난 것이기 때문에 정답 배열에 idx + 1을 넣어줌
      answer.push(idx + 1);
    }
  });

  // 정답 배열의 요소들을 오름차순으로 정렬하여 리턴함
  answer.sort((a, b) => a - b);
  return answer;
}

console.log(
  solution(
    '2022.05.19',
    ['A 6', 'B 12', 'C 3'],
    ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
  )
); // [1, 3]
console.log(
  solution(
    '2020.01.01',
    ['Z 3', 'D 5'],
    ['2019.01.01 D', '2019.11.15 Z', '2019.08.02 D', '2019.07.01 D', '2018.12.28 Z']
  )
); // [1, 4, 5]
