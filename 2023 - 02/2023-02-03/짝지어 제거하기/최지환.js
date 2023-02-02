// 효울성 테스트 실패(시간초과)
function solution(s) {
  let arr = [...s]; // 문자열 s 를 배열로 만들어줌

  // arr 길이만큼 반복하여 i 번째 요소와 i + 1번째 요소가 같다면
  // arr의 i 번째 요소부터 2개 제거한 후 처음부터 다시 반복
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = -1;
    }
  }

  // arr의 길이가 0이면 1을, 아니면 0을 반환
  return arr.length === 0 ? 1 : 0;
}
