function solution(s) {
  // s를 띄어쓰기 기준으로 나눠주고 각 요소를 숫자로 바꿔준다
  const number = s.split(' ').map((num) => Number(num));
  const min = Math.min(...number); // 최솟값을 찾아 min으로 할당
  const max = Math.max(...number); // 최댓값을 찾아 max로 할당

  // 문제에서 요구하는 형태로 반환
  return min + ' ' + max;
}
