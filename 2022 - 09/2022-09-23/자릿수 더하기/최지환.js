function solution(n) {
  const answer = n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);

  return answer;
}
