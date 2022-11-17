function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let answer = [];
  let min = 0;
  let max = 0;
  let zeroCnt = 0;

  lottos.forEach((num) => {
    min += win_nums.includes(num) ? 1 : 0;
    zeroCnt += num === 0 ? 1 : 0;
  });

  max = min + zeroCnt;
  answer = [rank[max], rank[min]];
  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
