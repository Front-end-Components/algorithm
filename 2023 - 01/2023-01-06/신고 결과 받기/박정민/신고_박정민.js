function solution(id_list, report, k) {
  report = [...new Set(report)];
  
  // 유저가 신고한 ID
  let new_report = {};
  report.forEach(e => {
      e = e.split(' ');
      new_report[e[0]] = new_report[e[0]] ? new_report[e[0]] + ' ' + e[1] : e[1];
  }) // { muzi: 'frodo neo', apeach: 'frodo muzi', frodo: 'neo' }

  // 신고당한 횟수
  let reported = {};
  report.forEach(e => {
      e = e.split(' ');
      reported[e[1]] = reported[e[1]] ? reported[e[1]] += 1 : 1;
  }) // { frodo: 2, neo: 2, muzi: 1 }
  
  return id_list.map((item) => {
      if(!new_report[item]) return 0;
      let result = new_report[item].split(' ');
      return result.filter(item => {
          if(reported[item] >= k) return true;
      }).length;
      
  })
}