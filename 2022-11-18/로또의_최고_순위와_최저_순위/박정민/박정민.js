function solution(lottos, win_nums) {
  let count = 0;
  let num = 0;
  let max = 0;
  let min = 0;
  const rank = [6, 5, 4, 3, 2, 1];
  for(let i = 0; i < lottos.length; i++) {
      if(lottos[i] === 0) num++;
      for(let j = 0; j < lottos.length; j++) {
          if(win_nums[i] === lottos[j]) {
              count++;
          }
      }
  }
  if(count === 0) {
      num === 6 ? max = count + num - 1 : max = count + num;
      min = count;
  } else {
      max = count + num -1;
      min = count - 1;
  }
  return [rank[max], rank[min]];
}


// count로 당첨된 번호의 개수를 구합니다.
// num으로 0의 개수를 구합니다.
// max와 min은 최고 순위와 최저 순위를 나타냅니다. 순위를 배열로 나타내어 맞춘 개수에 따라 순위를 반환
// for문을 이용하여 count와 num을 구합니다.
// 당첨된 번호의 개수가 0개 일때 num이 6라면 max는 count + num - 1 아니라면 count + num입니다. 또한 min은 num과 상관 없이 count입니다.
// 당첨된 번호의 개수가 0개가 아니라면 max는 count + num - 1, min은 count - 1 입니다.