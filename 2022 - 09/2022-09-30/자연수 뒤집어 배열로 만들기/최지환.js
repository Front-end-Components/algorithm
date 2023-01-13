function solution(n) {
  const str = n.toString().split('').reverse();
  return str.map((x) => parseInt(x));
}
