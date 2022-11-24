function solution(n, lost, reserve) {
  const student = Array(n).fill().map((arr, i) => i + 1);
  let result = n - lost.length;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  
  for(let i = 0; i < lost.length; i++) {
      for(let j = 0; j < reserve.length; j++) {
          if(lost[i] === reserve[j]) {
              result++;
              lost.splice(i, 1);
              reserve.splice(j, 1);
              i--;
          }
      }
  }
  
  let leng = Math.max(lost.length, reserve.length);
  for(let p = 0; p < leng; p++) {
      if(lost.includes(reserve[p] - 1) || lost.includes(reserve[p] + 1)) {
          result++;
          lost.shift();
          if(lost.length === 0) return result;
      }
  }
  return result;
}