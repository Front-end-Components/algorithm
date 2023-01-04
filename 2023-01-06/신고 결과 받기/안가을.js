function solution(id_list, report, k) {
  const answer = [];

  // key : 신고당한 사람, value : 신고한 사람들 배열
  const reportList = {};

  // key : 신고한 사람, value: 메일 받을 횟수
  const mailCount = {};

  // 주어진 id 리스트 배열을 이용해 두 객체의 key, value 초기화
  id_list.forEach((id) => {
    reportList[id] = [];
    mailCount[id] = 0;
  });

  // 주어진 report 배열에서 중복을 제거한 후 요소를 하나씩 꺼냄
  report = [...new Set(report)];
  report.forEach((item) => {
    // 현재 요소를 구조 분해 할당하여 신고한 사람, 신고당한 사람 변수에 저장
    const [from, to] = item.split(' ');

    // reportList 객체에 신고당한 사람을 key 값으로, 신고한 사람을 value 값인 배열의 요소로 넣음
    reportList[to].push(from);
  });

  // reportList 객체의 key를 하나씩 꺼냄 (신고당한 사람)
  for (let key in reportList) {
    // 현재 key 값으로 찾은 배열의 길이가 주어진 k보다 크거나 같을 경우 (이용 정지 대상)
    if (reportList[key].length >= k) {
      // 해당 배열의 요소들을 하나씩 꺼냄
      reportList[key].forEach((id) => {
        // mailCount 객체에서 해당 요소를 key로 찾은 값이 있을 경우 그 값 + 1, 없을 경우 1을 넣어줌
        mailCount[id] = mailCount[id] ? mailCount[id] + 1 : 1;
      });
    }
  }

  // mailCount 객체의 key를 하나씩 꺼냄 (신고한 사람)
  for (let key in mailCount) {
    // 현재 key 값으로 찾은 값을 정답 변수 배열에 push 함 (메일 받을 횟수)
    answer.push(mailCount[key]);
  }

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
); // [2, 1, 1, 0]
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3)); // [0, 0]
