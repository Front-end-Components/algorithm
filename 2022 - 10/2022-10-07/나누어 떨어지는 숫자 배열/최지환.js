function solution(arr, divisor) {
  let answer = arr.filter((x) => x % divisor === 0);

  if (answer.length === 0) {
    answer.push(-1);
  } else {
    answer = answer.sort((a, b) => a - b);
  }

  return answer;
}
