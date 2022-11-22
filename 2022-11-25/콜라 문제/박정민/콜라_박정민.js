function solution(a, b, n) {
  let result = 0;
  while(n >= a) {
      let remainder = n % a; 
      let cnt = Math.floor(n / a) * b;
      result += cnt;
      n = cnt + remainder;
  }
  return result;
}