function solution(new_id) {
  const reg = /\d*([a-z])*\.*\-*\_*/g;

  new_id = new_id.toLowerCase();

  new_id = new_id.match(reg).join('');

  new_id = new_id.replace(/\.{2,}/g, '.');

  new_id = new_id.replace(/^\.|\.$/g, '');

  new_id.length === 0 ? new_id = 'a' : new_id = new_id;

  new_id.length > 15 ? new_id = new_id.slice(0, 15) : new_id = new_id;
  new_id = new_id.replace(/\.$/g, '');

  if(new_id.length < 3) {
      let plus_id = new_id[new_id.length - 1].repeat(3 - new_id.length);
      return new_id + plus_id;
  }
  
  return new_id;
  
}
