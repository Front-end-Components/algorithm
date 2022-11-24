function solution(participant, completion) {
  let strHash = new Map();

  // 참가자 배열의 요소들을 꺼내어 map 에 데이터를 넣음
  for (let x of participant) {
    // key: 참가자 이름
    // value: ( 참가자 이름을 key 값으로 찾은 value 값이 있다면 그 값, 없다면 0 ) + 1
    strHash.set(x, (strHash.get(x) || 0) + 1);
  }

  // 완주자 배열의 요소들을 꺼내어 map 에 데이터를 넣음
  for (let x of completion) {
    // key: 참가자 이름
    // value:  ( 참가자 이름을 key 값으로 찾은 value 값이 있다면 그 값, 없다면 0 ) - 1
    strHash.set(x, (strHash.get(x) || 0) - 1);
  }

  // map 의 요소들을 하나씩 꺼냄
  for (let [key, val] of strHash) {
    // value 값이 1일 경우 해당 key 를 반환함
    // 참가자 배열에는 있지만 완주자 배열에는 없어서 1이 그대로 남아있는 경우임
    if (val === 1) {
      return key;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // leo
console.log(solution(['marina', 'josipa', 'nikola', 'vinko', 'filipa'], ['josipa', 'filipa', 'marina', 'nikola'])); // vinko
console.log(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])); // mislav
