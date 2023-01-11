function solution(s) {
  // 문자열 s 를 띄어쓰기 기준으로 나눈 뒤, 소문자로 바꿔서 arr에 할당
  const arr = s.split(' ').map((str) => str.toLowerCase());
  let answer = [];

  // arr를 순회하며 요소의 첫 문자를 대문자로 바꾼 문자와 그 다음 요소들을 더해 answer에 push 해준다.
  // 이 때, 공백 문자가 연속해서 나올 수 있는 경우를 처리하기 위해 요소가 존재하지 않으면 ''를 반환해준다.
  arr.forEach((str) => {
    answer.push(
      str ? [str.split('')[0].toUpperCase(), str.slice(1)].join('') : ''
    );
  });

  // answer = ["3people","Unfollowed","Me"] 와 같은 배열이므로 공백을 주고 join 해줘서 return
  return answer.join(' ');
}
