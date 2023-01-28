function solution(n) {
  let fibo = [0, 1]; // 피보나치 수를 담아둘 배열

  // 반복문을 통해 피보나치 수를 1234567로 나눈 나머지를 fibo 배열에 push
  for (let i = 2; i <= n; i++) {
    fibo.push((fibo[i - 2] + fibo[i - 1]) % 1234567);
  }

  return fibo[n];
}
