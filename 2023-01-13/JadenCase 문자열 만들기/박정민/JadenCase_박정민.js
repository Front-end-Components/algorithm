function solution(s) {
  s = s.split(' ');
  
  return s.map((item) => {
      let first = item.charAt(0).toUpperCase();
      let other = item.slice(1).toLowerCase();
      return first + other;
  }).join(' ');
}