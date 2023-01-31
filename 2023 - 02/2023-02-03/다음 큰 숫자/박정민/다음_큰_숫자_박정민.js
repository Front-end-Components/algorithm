function solution(n) {
  let n_count = n.toString(2).match(/[1]/g)?.length;
  let ather_count = 0;
  let result = n;
  
  while(ather_count !== n_count) {
      result++;
      ather_count = result.toString(2).match(/[1]/g)?.length;
  }
  return result;
}

// result변수가 없어도 가능함
function solution(n) {
  let n_count = n.toString(2).match(/[1]/g)?.length;
  let ather_count = 0;
  
  while(ather_count !== n_count) {
      n++;
      ather_count = n.toString(2).match(/[1]/g)?.length;
  }
  return n;
}