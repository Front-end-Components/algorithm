function solution(today, terms, privacies) {
  let term = 0; // privacies 의 날짜와 today와의 차이
  let answer = [];

  // privacies 배열을 반복하여 년도, 월, 일의 차이를 각각 구해서
  // 모두 일을 기준으로 환산하여 term에 할당해준다.
  // 각 인덱스에 맞는 유효기간을 terms에서 찾아 deadline으로 할당하고,
  // term 과 비교해 유효기간이 지났을 때, answer에 push 해준다.
  privacies.forEach((privacy, idx) => {
    let year = Number(today.split('.')[0]) - Number(privacy.split('.')[0]);
    let month = Number(today.split('.')[1]) - Number(privacy.split('.')[1]);
    let day =
      Number(today.split('.')[2].slice(0, 2)) -
      Number(privacy.split('.')[2].slice(0, 2));

    term = year * 28 * 12 + month * 28 + day;

    let deadline = terms.find((el) => el.includes(privacy.split(' ')[1]));

    if (term >= deadline.split(' ')[1] * 28) {
      answer.push(idx + 1);
    }
  });

  return answer;
}
