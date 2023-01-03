function solution(number, limit, power) {
  let cnt = 0;
  let cnt_array = [];
  
  for(let i = 1; i <= number; i++) {
      for(let j = 1; j <= Math.sqrt(i); j++) {
          if(i % j === 0) {
              if(i / j === j) {
                  cnt++;
              } else {
                  cnt += 2;
              }
          }
      }
      cnt_array.push(cnt);
      cnt = 0;
  }

  let result = 0;
  for(let n = 0; n < cnt_array.length; n++) {
      if(cnt_array[n] > limit) {
          result += power;
      } else {
          result += cnt_array[n];
      }
  }
  return result;
}