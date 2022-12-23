function solution(k, m, score) {
  let result = 0;
  score = score.sort((a, b) => a - b).slice(score.length % m);
  
  for(let i = 0; i < score.length; i += m) {
      result += score[i] * m
  }
  return result;
}