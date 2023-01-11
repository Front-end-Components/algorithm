function solution(A, B) {
  // 배열 A, B를 오름차순으로 정렬
  const arrA = A.sort((a, b) => a - b);
  const arrB = B.sort((a, b) => a - b);
  let answer = 0;

  // 배열의 길이만큼 반복해 arrA의 가장 작은 요소와 arrB의 가장 큰 요소를 서로 곱해 answer에 누적해줌
  for (let i = 0; i < arrA.length; i++) {
    answer += arrA[i] * arrB[arrB.length - 1 - i];
  }

  return answer;
}
