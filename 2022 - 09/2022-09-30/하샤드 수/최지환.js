function solution(x) {
  const arr = x.toString().split('');
  const num = arr.reduce((acc, cur) => parseInt(acc) + parseInt(cur));

  return x % num === 0 ? true : false;
}
