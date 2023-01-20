function solution(n) {
  const halfN = Math.floor(n / 2);
  // 1부터 n 까지의 숫자를 배열로 선언
  const numbers = Array(n)
    .fill()
    .map((el, idx) => (el = idx + 1));
  // 숫자들의 합을 담을 배열
  let sum = Array(halfN).fill(0);

  // n을 2로 나눈 숫자까지만 합을 구해주면 그 뒷 숫자는 어차피 n을 넘어버리기 때문에
  // 구할 필요가 없음
  // sum에 numbers의 요소들을 순서대로 더한 값을 넣어주고, n 이상일 때 다음 요소로 넘어감
  for (let i = 0; i < halfN; i++) {
    for (let j = i; j < n; j++) {
      sum[i] += numbers[j];
      if (sum[i] >= n) break;
    }
  }

  // sum의 요소 중에서 n과 같은 요소들을 모은 배열의 길이와 n 자기 자신을 항상 더하므로 1을 더해주고 리턴
  return sum.filter((el) => el === n).length + 1;
}
