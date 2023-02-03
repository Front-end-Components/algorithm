function solution(n, words) {
  let answer = [0, 0];

  for (let i = 1; i < words.length; i++) {
    if (
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      words.slice(0, i).includes(words[i])
    ) {
      answer = [(i % n) + 1, Math.ceil((i + 1) / n)];
      break;
    }
  }

  return answer;
}
