function solution(n, words) {
  // 정답 배열에 미리 [0, 0]을 할당해 놓음
  let answer = [0, 0];

  // 1부터 words 배열의 길이보다 작을 때까지 반복함
  for (let i = 1; i < words.length; i++) {
    if (
      // words 배열에서의 이전 요소의 마지막 글자가 현재 요소의 첫번째 글자와 동일하지 않거나 (이어지지 않는 단어)
      words[i - 1][words[i - 1].length - 1] !== words[i][0] ||
      // words 배열의 이전 요소들 중에서 현재 요소가 포함되어 있을 경우 (중복 단어)
      words.slice(0, i).includes(words[i])
    ) {
      // 정답 변수에 [번호, 차례] 를 할당하고 빠져나감
      // 번호: (i % n) + 1;
      // 차례: Math.ceil((i + 1) / n);
      /*
       예) 단어 배열 : ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
       사람 수: 3명
       걸린 사람: "tank" 를 중복으로 말한 사람
       걸린 사람의 번호: (8 % 3) + 1 === 3번째 사람
       걸린 사람의 차례: 올림((8 + 1) / 3) === (9 / 3) === 3
       정답: [3, 3]
      */
      answer = [(i % n) + 1, Math.ceil((i + 1) / n)];
      break;
    }
  }

  return answer;
}

console.log(
  solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])
); // [3, 3]

console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
); // [0, 0]

console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])); // [1, 3]
