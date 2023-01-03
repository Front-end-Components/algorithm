function solution(babbling) {
  let result = 0;
  for(let i = 0; i < babbling.length; i++) {
        if(/(aya|ye|woo|ma)\1+/g.test(babbling[i])) continue;
        if(/^(aya|ye|woo|ma)+$/g.test(babbling[i])) result++;
    }
  return result;
}