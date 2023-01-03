function solution(k, score) {
  let stack = [];
  let result = [];
  for(let i = 0; i < score.length; i++) {
      stack.push(score[i]);
      if(stack.length > k) {
          stack.sort((a, b) => a - b);
          stack.shift();
      }
      result.push(Math.min(...stack));
  }
  return result;
}