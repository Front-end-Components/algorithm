function solution(n) {
  let result = 0;
  let div = 1;
  
  while(n > 0) {
      if(n % div === 0) result++;
      n -= div;
      div++;
  }
  
  return result;
}