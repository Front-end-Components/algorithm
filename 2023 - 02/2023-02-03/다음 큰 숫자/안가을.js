function solution(n) {
  let answer = 0;

  // bigNum 변수에 주어진 숫자 n을 할당함
  let bigNum = n;

  // while 문에 true 를 넣어 무한 루프를 만듦
  while (true) {
    // bigNum 변수에 1을 더함 (다음 큰 숫자는 주어진 숫자 n 보다 커야 함)
    bigNum++;

    // bigNum 변수를 2진수로 변환한 후의 1의 개수와 주어진 숫자 n을 2진수로 변환한 후의 1의 개수가 같을 경우
    if (bigNum.toString(2).match(/1/g).length === n.toString(2).match(/1/g).length) {
      // 정답 변수에 bigNum을 할당하고 무한 루프를 빠져나옴 (bigNum은 다음 큰 숫자)
      answer = bigNum;
      break;
    }
  }

  return answer;
}

console.log(solution(78)); // 83
console.log(solution(15)); // 23
