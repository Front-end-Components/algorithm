function solution(t, p) {
  let arr = [];
  let count = 0;

  // t문자열 길이만큼 반복하여 t문자열을 p문자열 길이만큼 잘라서
  // arr에 담아준다. 이 때, 조건을 줘서 p길이보다 작은 수가 담기는 것을 막는다.
  for (let i = 0; i < t.length; i++) {
    if (i + p.length <= t.length) {
      arr.push(t.substr(i, p.length));
    }
  }

  // p문자열과 길이가 같은 문자열들이 담긴 arr를 순회하며
  // p보다 작거나 같은 경우 카운트를 올려준다.
  arr.forEach((el) => {
    if (Number(el) <= Number(p)) count++;
  });

  return count;
}
