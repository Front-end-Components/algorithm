function solution(k, m, score) {
  const arr = score.sort((a, b) => b - a);
  let result = [];
  let answer = 0;

  // 정렬된 score 배열을 m개씩 묶어줌
  // 예시 [[4,4,4],[4,4,4],[2,2,2],[2,1,1]]
  for (let i = 0; i < arr.length; i += m) {
    result.push(arr.slice(i, i + m));
  }

  // 2차원 배열의 인덱스에서 가장 작은값과 m을 곱해 answer에 누적해줌
  for (let j = 0; j < result.length; j++) {
    if (result[j].length === m) {
      answer += Math.min(...result[j]) * m;
    }
  }

  return answer;
}
