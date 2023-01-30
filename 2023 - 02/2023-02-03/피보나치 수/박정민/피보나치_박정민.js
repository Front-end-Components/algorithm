function solution(n) {
  let result = [0, 1];
  for(let i = 2; i <= n; i++) {
      let sum = result[i - 2] + result[i - 1];
      result.push(sum % 1234567);
  }
  
  return result[n];
}