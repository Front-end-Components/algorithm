function solution(t, p) {
  let t_array = t.split('');
  let result_array = [];
  let result = 0;
  let p_str = '';

  for(let i = 0; i < t.length; i++) {
      p_str += t_array[i];
      if(p_str.length === p.length) {
          result_array.push(Number(p_str));
          p_str = '';
          t_array.shift();
          i = -1;
      }
  }

  result_array.map((item) => {
      if(item <= Number(p)) result++;
  });
  
  return result;
}