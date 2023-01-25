function solution(s) {
  let zero_count = 0;
  let turn_count = 0;
 
  while(s !== '1') {
      s.match(/[0]/g)?.length === undefined ? zero_count += 0 : zero_count += s.match(/[0]/g)?.length;
      s = s.replace(/[0]/g, '');
      
      s = s.length.toString(2);
      turn_count++;
  }
  
  return [turn_count, zero_count];
}