function solution(n) {
  const a = Math.sqrt(n);
  const p = Number.isInteger(a);

  return a >= 0 && p === true ? Math.pow(a + 1, 2) : -1;
}
