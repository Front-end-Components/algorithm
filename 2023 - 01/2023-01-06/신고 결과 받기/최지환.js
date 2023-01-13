function solution(id_list, report, k) {
  // set을 이용해 중복을 제거함으로써
  // 한 유저가 같은 유저를 여러 번 신고한 경우 1번으로 처리
  const set = new Set(report);
  const newReport = [...set];

  let reportObj = {}; // 유저가 신고한 id를 담을 객체
  let reportedCount = {}; // 신고 당한 횟수를 담을 객체
  let answer = {};

  // 빈 객체의 key를 id_list의 요소로 지정
  id_list.forEach((key) => {
    reportObj[key] = '';
    reportedCount[key] = '';
    answer[key] = 0;
  });

  // newReport 배열을 순회하며 해당 인덱스의 공백 앞 문자를 key로,
  // 공백 뒤 문자를 value로 reportObj 객체에 넣어준다.
  // 그리고 신고 당한 횟수도 올려준다.
  for (let i = 0; i < newReport.length; i++) {
    reportObj[newReport[i].split(' ')[0]] += newReport[i].split(' ')[1] + ' ';

    if (id_list.includes(newReport[i].split(' ')[1])) {
      reportedCount[newReport[i].split(' ')[1]]++;
    }
  }

  // 신고 당한 횟수 객체에서 value가 k 이상인 key들을 모아 bannedId 배열을 선언해준다.
  const keysOfReportedCount = Object.keys(reportedCount);
  const bannedId = keysOfReportedCount.filter((key) => reportedCount[key] >= k);

  // for...in 반복문을 사용하여, reportObj 객체 안의 속성을 하나씩 탐색하면서
  // reportObj 객체의 value를 공백 기준으로 나눠준 뒤, 각각의 value에 대해
  // 해당 value가 bannedId를 포함하고 있으면 answer 객체의 value를 올려준다.
  for (key in reportObj) {
    reportObj[key].split(' ').forEach((el) => {
      if (bannedId.includes(el)) {
        answer[key]++;
      }
    });
  }

  // 위 과정을 통해 answer 객체는 id_list 를 key로, 받은 결과 메일 수를 value로 가지게 된다.
  // 문제는 받은 메일 수를 담은 배열을 리턴하면 되므로 객체의 value값들만 return 해준다.
  return Object.values(answer);
}
