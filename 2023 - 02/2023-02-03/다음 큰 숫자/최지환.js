function solution(n) {
  const binary = n.toString(2); // n을 2진수로 변환한 값
  const countOne = [...binary].filter((el) => el === '1').length; // 2진수 변환값의 1의 갯수
  let answer = 0;

  // 반복문을 통해 n 다음 수 부터 2진수로 변환 후 1의 갯수를 세어
  // n을 변환한 값의 1의 개수와 같으면 리턴
  for (let i = 1; i < n; i++) {
    answer = n + i;
    let answerCountOne = [...answer.toString(2)].filter(
      (el) => el === '1'
    ).length;

    if (answerCountOne === countOne) {
      return answer;
    }
  }
}
