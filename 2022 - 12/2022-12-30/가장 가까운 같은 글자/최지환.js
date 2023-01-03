function solution(s) {
  const arr = s.split('');
  let stack = [];
  let answer = [];

  // 문자열 s를 쪼개 배열로 만든 후 순회하며 같은 글자가 있는지 판별한다.
  // stack에 포함되어 있지 않으면 -1을 answer에 push
  // 포함되어 있으면 같은 글자가 있는 마지막 인덱스와 거리를 구해 answer에 push
  // stack에 s 요소를 넣어 다음 요소와 비교를 진행한다.
  arr.forEach((el) => {
    if (!stack.includes(el)) {
      answer.push(-1);
    }

    if (stack.includes(el)) {
      answer.push(stack.length - stack.lastIndexOf(el));
    }

    stack.push(el);
  });

  return answer;
}
