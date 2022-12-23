function solution(new_id) {
  // 1 ~ 4 단계
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w-.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "");

  // 5 단계
  new_id.length === 0 ? (new_id = "a") : (new_id = new_id);

  // 6 단계
  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15).replace(/\.$/g, "");
  }
  // 7 단계
  if (new_id.length < 3) {
    new_id += new_id.slice(new_id.length - 1).repeat(3 - new_id.length);
  }

  return new_id;
}
