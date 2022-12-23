function solution(lottos, win_nums) {
    let zero = 0;
    let win = 0;
    for(let x of lottos){
        if(x === 0) zero++;
        else if(win_nums.includes(x)) win++; console.log(win);
    }
    
    let max = Math.min(7 - (win + zero), 6);
    let min = Math.min(7 - win, 6);

    return [max, min];
}

// 풀이
// 로또의 당첨 번호와 배열간의 비교이기 때문에 for문으로 배열을 탐색했다.
// 0을 만났을때 zero의 카운트를 증가 시켰고,
// 그 외에 당첨 번호와 일치하는 수를 만났을때 win의 카운트를 증가 시켰다.
// 당첨되는 가장 큰 순위와 가장 작은 순위를 각각의 변수에 선언했다.
// 가장 큰 순위는 7에서 win의 개수와 zero의 개수를 빼고 나온 숫자와 6과 비교하여 작은수로 할당했다.
// 가장 작은 순위는 7에서 win의 개수를 빼고 6과 비교하여 작은수를 할당했다.
// 7에서 카운트를 빼는 이유는 당첨 번호가 1, 0의 개수가 있기 때문에 7등도 포함시켜 주었다.


// 다른 사람 풀이
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;
  let maxCount = minCount + zeroCount;
  return [rank[maxCount], rank[minCount]];
}
