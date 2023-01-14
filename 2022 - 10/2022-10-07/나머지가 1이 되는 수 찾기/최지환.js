function solution(n) {
  let x = 0;

  for (let i = 0; i < n; i++) {
    if (n % i === 1) {
      return (x = i);
    }
  }
}
