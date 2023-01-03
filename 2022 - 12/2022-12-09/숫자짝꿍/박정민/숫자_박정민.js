function solution(X, Y) {
  let result = [];
  let nArray = [];

  for(const x of X) {
      nArray[x] = (nArray[x] || 0) + 1;
  }
  
  for(const x of Y) {
      if(nArray[x]) {
          result.push(x);
          nArray[x]--;
      }
  }

  result.sort((a, b) => b - a);
  result = result.length === 0 ? '-1' : result.join('');
  if(result.match(/^0/g)) result = '0';
  
  return result;
}