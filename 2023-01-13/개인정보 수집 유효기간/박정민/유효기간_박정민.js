function solution(today, terms, privacies) {
  let newTerms = {};
  terms.forEach(e => {
      e = e.split(' ');
      newTerms[e[0]] = Number(e[1]);
  })
  
  let newPrivacies = [];
  privacies.forEach(e => {
      e = e.split(' ');
      let date = new Date(e[0]);
      let pushData = new Date(date.setMonth(date.getMonth() + newTerms[e[1]]));
      pushData.getDate() - 1 === 0 ? pushData.setDate(29) && pushData.setMonth(pushData.getMonth() - 1) : pushData;
      newPrivacies.push(pushData);
  })
  
  let newToday = new Date(today);
  let result = [];
  newPrivacies.map((item, i) => {
      if(newToday >= item) result.push(i + 1);
  })
  
  return result;

}