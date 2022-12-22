function solution(k, score) {
  let arr = []; // 명예의 전당 목록 배열
  let answer = []; // 발표 점수 배열

  // score 배열의 길이만큼 반복문을 돌려서
  // 명예의 전당 목록에 점수를 push 해주고
  // 내림차순으로 정렬해준다.
  // 만약 배열의 길이가 k 보다 크면 마지막 점수(내림차순 정렬이므로 최하위 점수)를
  // pop 해주고 발표 점수 배열에 명예의 전당 배열 중, 가장 마지막 인덱스를 넣어준다.
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => b - a);
    if (arr.length > k) {
      arr.pop();
    }
    answer.push(arr[arr.length - 1]);
  }

  return answer;
}
