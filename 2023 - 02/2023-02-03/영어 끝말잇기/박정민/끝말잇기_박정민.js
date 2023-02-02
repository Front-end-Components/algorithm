function solution(n, words) {
  let result = [0, 0];

  for(let i = 1; i < words.length; i++) {
      if(words[i - 1][words[i - 1].length - 1] !== words[i][0] || words.slice(0, i - 1).includes(words[i])) {
          result = [(i % n) + 1, Math.ceil((i + 1) / n)];
          break;
      }
  }
  
  return result;
}