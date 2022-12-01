function solution(food) {
  for(let i = 1; i < food.length; i++) {
      if(food[i] % 2 === 1) {
          food[i]--;
      }
  }
  const sum = food.reduce((a, b) => a + b);
  let result = Array(sum).fill(0);
  let c = 0;
  for(let j = 1; j < food.length; j++) {
      while(food[j] > 0) {
          result[c] += j;
          result[sum - 1 - c] += j;
          food[j] -= 2;
          c++;
      }
  }
  return result.join('');
}